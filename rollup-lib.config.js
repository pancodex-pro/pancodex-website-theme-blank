const json = require('@rollup/plugin-json');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;
const image = require('@rollup/plugin-image');
const typescript = require('rollup-plugin-typescript2');
const styles = require('rollup-plugin-styles');

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'es',
      assetFileNames: '[name][extname]',
      paths: {
        '@pancodex/pancodex-website-api': 'api'
      }
    },
  ],
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
    'react',
    'react-dom',
    '@headlessui/react',
    '@pancodex/pancodex-website-api'
  ],
  plugins: [
    json(),
    resolve({ preferBuiltins: true }),
    styles({
      mode: ['extract', 'index.css']
    }),
    image(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
};

module.exports = config;
