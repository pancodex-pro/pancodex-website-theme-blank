const rollup = require('rollup');
const config = require('./rollup-lib.config');

const inputOptions = {
  // core input options
  external: [...config.external],
  input: config.input,
  plugins: [...config.plugins],
};

const outputOptions = {...config.output[0]};

async function build() {
  let bundle;
  try {
    console.time('Bundle building');
    // create a bundle
    bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
    console.timeEnd('Bundle building');
  } catch (error) {
    // do some error reporting
    console.error(error);
  }
  if (bundle) {
    // closes the bundle
    await bundle.close();
  }
}

module.exports = {
  build,
};
