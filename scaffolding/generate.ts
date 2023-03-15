import {FilesGenerator} from '@pancodex/sdk-lib';
import * as documentClasses from './documents';

async function run(): Promise<void> {
    await new FilesGenerator()
        .withDocumentClasses(documentClasses)
        .generate();
}

run()
    .then(() => {
        console.log('DONE');
    })
    .catch(error => {
        console.error(error.message);
    });
