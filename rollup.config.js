import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { getFiles } from './src/utils/build.util.mjs';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: ['./build/index.ts', ...getFiles('./build/icons', extensions)],
  output: {
    dir: 'lib',
    format: 'cjs',
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
  ],
};
