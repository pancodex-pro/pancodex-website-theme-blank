const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;
const image = require('@rollup/plugin-image');
const typescript = require('rollup-plugin-typescript2');
const styles = require('rollup-plugin-styles');
const externalGlobals = require('rollup-plugin-external-globals');
const terser = require('rollup-plugin-terser');

const inputOptions = {
  input: 'src/index.ts',
  external: [
    'lodash/cloneDeep',
    'lodash/forOwn',
    'lodash/get',
    'lodash/isArray',
    'lodash/isEmpty',
    'lodash/isObject',
    'lodash/uniqueId',
    'lodash/unionWith',
    'lodash/isEqual',
    '@headlessui/react',
    '@pancodex/bridge',
    '@pancodex/platform',
    'react',
    'react-dom',
  ],
  plugins: [
    resolve(),
    image(),
    commonjs(),
    styles({
      mode: ['extract', 'pancodex-theme.css']
    }),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    externalGlobals({
      '@headlessui/react': 'headlessuiReact',
      '@pancodex/bridge': 'pancodexBridge',
      '@pancodex/platform': 'pancodexPlatform',
      react: 'React',
      'react-dom': 'ReactDOM'
    }),
  ],
};

const outputOptions = {
  format: 'umd',
  name: 'PancodexTheme',
  file: 'dist/pancodex-theme.umd.js',
  assetFileNames: '[name][extname]',
};

const config = {
  ...inputOptions,
  output: [outputOptions],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser.terser());
}

module.exports = config;
