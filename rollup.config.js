import typescript from 'rollup-plugin-typescript2'
import cleanup from 'rollup-plugin-cleanup'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.mjs',
      format: 'esm',
    }
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    cleanup({ extensions: ['ts'] })
  ],
} 
