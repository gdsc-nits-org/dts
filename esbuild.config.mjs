import * as esbuild from "esbuild"

esbuild.build({
  entryPoints: ['dist/build/index.js'],
  bundle: true,
  outfile: 'dist/index.js',
  target: 'es6',
  format: 'esm'
})