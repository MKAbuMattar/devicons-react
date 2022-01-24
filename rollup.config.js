import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import multiInput from 'rollup-plugin-multi-input'
import path from 'path'

export default [
  {
    input: ['./src/**/*.js'],
    output: [
      {
        format: 'es',
        dir: './',
      },
      {
        format: 'cjs',
        dir: './',
      },
    ],
    plugins: [
      multiInput({
        relative: 'src/',
        transformOutputPath: (output, input) =>
          `${path.basename(output)}`.toLowerCase().includes('index'.toLowerCase())
            ? `${path.basename(output)}`
            : `icons/${path.basename(output)}`,
      }),
      babel({
        exclude: '**/node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      resolve(),
      external(),
      terser(),
      commonjs({ include: ['./index.js', 'node_modules/**'] }),
    ],
  },
]
