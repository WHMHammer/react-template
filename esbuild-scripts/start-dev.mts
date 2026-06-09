import { context } from 'esbuild';

import { createBuildOptions } from './createBuildOptions.mts';

const outdir = 'dist-dev/';
const buildOptions = createBuildOptions({
  buildOptions: {
    minify: false,
    outdir,
    sourcemap: true,
  },
  htmlPluginConfiguration: {
    inline: {
      js: false,
      css: false,
    },
  },
});
(buildOptions.entryPoints as string[]).push('esbuild-scripts/live-reload.ts');
const ctx = await context(buildOptions);

await ctx.watch();

const host = 'localhost';
const { port } = await ctx.serve({
  host,
  servedir: outdir,
});
// biome-ignore lint/suspicious/noConsole: this is an esbuild script
console.log(`http://${host}:${port}`);
