import fs from 'fs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'smit',
    },
    {
      file: pkg['iife:main'],
      format: 'iife',
      name: 'smit',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg['umd:main'],
      format: 'umd',
      name: 'smit',
    },
  ],
  plugins: [
    typescript({ tsconfig: 'tsconfig.json', typescript: require('typescript') }),
    terser(),
    sizeSnapshot(),
  ],
};
