import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/module.js',
  output: [{
    file: 'dist/main.js',
    format: 'cjs',
  }, {
    file: 'dist/module.es6.js',
    format: 'es',
  }],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
};
