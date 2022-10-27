const rollup = require('rollup');
const config = require('./rollup-umd.config');

const inputOptions = {
  // core input options
  external: [...config.external],
  input: config.input,
  plugins: [...config.plugins],
};

const outputOptions = {...config.output[0]};

let cache;
let watcher;

function makeCache(bundle) {
  cache = bundle.cache;
  if (cache && cache.modules && cache.modules.length > 0) {
    console.log('cache old modules count: ', cache.modules.length);
    const newModules = [];
    cache.modules.forEach(module => {
      // remove tailwind.css implicitly because the tailwind output file should be recompiled every time.
      if (module.id && !module.id.endsWith('tailwind.css')) {
        newModules.push(module);
      }
    });
    cache.modules = newModules;
    console.log('cache new modules count: ', cache.modules.length);
  }
}

async function build() {
  let bundle;
  try {
    console.time('Bundle building');
    // create a bundle
    bundle = await rollup.rollup({...inputOptions, cache});
    await bundle.write(outputOptions);
    console.timeEnd('Bundle building');
  } catch (error) {
    // do some error reporting
    console.error(error);
  }
  if (bundle) {
    makeCache(bundle);
    // closes the bundle
    await bundle.close();
  }
}

function watch(cb) {
  if (watcher) {
    try {
      watcher.close();
    } catch (e) {
      watcher = undefined;
    }
  }
  watcher = rollup.watch({
    ...inputOptions,
    cache,
    output: [outputOptions],
    watch: {
      exclude: 'node_modules/**',
      include: 'src/**',
    }
  });
  // This will make sure that bundles are properly closed after each run
  watcher.on('event', ({ code, result, error }) => {
    if (cb) {
      cb(code, error);
    }
    if (result) {
      makeCache(result);
      result.close();
    }
  });
}

function shutdown() {
  if (watcher) {
    try {
      watcher.close();
    } catch (e) {
      watcher = undefined;
    }
  }
}

module.exports = {
  build,
  watch,
  shutdown,
};
