const { Octokit } = require("octokit");

let octokit;
let currentGhToken;
let currentLogin;

function getOctokit(ghToken) {
    if (!octokit || currentGhToken !== ghToken) {
        currentGhToken = ghToken;
        currentLogin = null;
        octokit = new Octokit({ auth: ghToken });
    }
    return octokit;
}

function getBranch(owner, ghToken, repositoryName, branchName, noCache = false) {
    const octokitInstance = getOctokit(ghToken);
    const options = {
        owner,
        repo: repositoryName,
        branch: branchName
    };
    if (noCache) {
        options.headers = {'If-None-Match': ''};
    }
    return octokitInstance.request('GET /repos/{owner}/{repo}/branches/{branch}', options)
        .then(({data}) => {
            return data;
        });
}

function getBranchTree(owner, ghToken, repositoryName, sha, noCache = false) {
    const octokitInstance = getOctokit(ghToken);
    const options = {
        owner,
        repo: repositoryName,
        tree_sha: sha
    };
    if (noCache) {
        options.headers = {'If-None-Match': ''};
    }
    return octokitInstance.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}?recursive=1', options)
        .then(({data}) => {
            return data;
        });
}

function createTree(owner, ghToken, repositoryName, baseTree, tree) {
    const octokitInstance = getOctokit(ghToken);
    return octokitInstance.request('POST /repos/{owner}/{repo}/git/trees', {
        owner: owner,
        repo: repositoryName,
        base_tree: baseTree,
        tree
    }).then(({data}) => {
        return data;
    });
}

function createCommit(
    owner,
    ghToken,
    repositoryName,
    branchName,
    parentSha,
    treeSha,
    author,
    commitMessage
) {
    const octokitInstance = getOctokit(ghToken);
    return octokitInstance.request('POST /repos/{owner}/{repo}/git/commits', {
        owner: owner,
        repo: repositoryName,
        message: commitMessage,
        author: author,
        parents: [
            parentSha
        ],
        tree: treeSha,
    }).then(({data}) => {
        return octokitInstance.request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
            owner: owner,
            repo: repositoryName,
            ref: `heads/${branchName}`,
            sha: data.sha,
            force: true
        }).then(() => {
            return data;
        });
    });
}

function waitForBranchUpdatedWithCommit(
    owner,
    ghToken,
    repositoryName,
    branchName,
    commitSha,
    timesCounter = 0
) {
    if (timesCounter >= 10) {
        throw Error(`It seems that we need more than 30 seconds to wait for the ${branchName} branch is updated on the server.`);
    }
    return new Promise((resolve, reject) => setTimeout(() => {
        return getBranch(owner, ghToken, repositoryName, branchName, true)
            .then((branchData) => {
                if (branchData.commit.sha === commitSha) {
                    resolve();
                } else {
                    return waitForBranchUpdatedWithCommit(owner, ghToken, repositoryName, branchName, commitSha, timesCounter + 1);
                }
            })
            .catch(() => {
                reject(`Can not get the ${branchName} branch: ${e.message}`);
            });
    }, 3000));
}

module.exports = {
    getBranch,
    getBranchTree,
    createTree,
    createCommit,
    waitForBranchUpdatedWithCommit
};
