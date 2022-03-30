import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDeps from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import visualizer from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'
import { getFiles } from './generate/utils/build.util'

const extensions = ['.js', '.ts', '.jsx', '.tsx']

export default {
  input: ['./src/index.ts', ...getFiles('./src/icons', extensions)],
  output: {
    dir: 'lib',
    format: 'cjs',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDeps(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'lib',
    }),
    postcss(),
    terser(),
    visualizer({
      filename: 'bundle.analysis.html',
      open: true,
    }),
  ],
}
