import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import multiInput from 'rollup-plugin-multi-input'
import copy from 'rollup-plugin-copy'

export default [
  {
    input: ['./src/**/*.js'],
    output: [
      {
        format: 'es',
        dir: './lib',
      },
      {
        format: 'cjs',
        dir: './lib',
      },
      {
        format: 'esm',
        dir: './lib',
      },
    ],
    external: [/@babel\/runtime/, 'react'],
    plugins: [
      multiInput({
        relative: 'src/',
      }),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: '**/node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      resolve(),
      external(),
      terser(),
      commonjs({ include: ['./index.js', 'node_modules/**'] }),
      copy({
        targets: [
          { src: './README.md', dest: 'lib' },
          { src: './LICENSE', dest: 'lib' },
          { src: './package.json', dest: 'lib' },
        ],
      }),
    ],
  },
]
