import svg from 'rollup-plugin-svg'
import babel from 'rollup-plugin-babel'
import sourcemaps from 'rollup-plugin-sourcemaps'
import resolve from 'rollup-plugin-node-resolve'

export default {
  plugins: [
    svg(),
    babel(),
    sourcemaps(),
    resolve({
      extensions: ['.svg']
    })
  ],
  input: './src/ImageResize.js',
  output: [
    {
      file: './dist/ImageResize.cjs.js',
      sourcemap: true,
      format: 'cjs'
    },
    {
      file: './dist/ImageResize.es.js',
      sourcemap: true,
      format: 'es'
    }
  ]
}
