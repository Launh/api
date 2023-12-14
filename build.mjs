import esbuild from 'esbuild'

esbuild
  .build({
    entryPoints: ['api/index.ts'],
    bundle: true,
    outfile: 'dist/api/index.js',
    format: 'esm',
    minify: true,
  })
  .catch(() => process.exit(1))
