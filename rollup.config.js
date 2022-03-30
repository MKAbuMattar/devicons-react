import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDeps from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import visualizer from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import { getFiles } from './generate/utils/build.util'

const extensions = ['.js', '.ts', '.jsx', '.tsx']

export default {
  input: ['./src/index.ts', ...getFiles('./src/icons', extensions)],
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    peerDeps(),
    resolve(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      exclude: '**/node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    commonjs({ include: ['./index.ts', 'node_modules/**'] }),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'lib',
    }),
    postcss(),
    terser(),
    copy({
      targets: [
        { src: './README.md', dest: 'lib' },
        { src: './LICENSE', dest: 'lib' },
        { src: './package.json', dest: 'lib' },
      ],
    }),
    visualizer({
      filename: 'bundle.analysis.html',
      open: true,
    }),
  ],
}
