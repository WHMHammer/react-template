import { build } from 'esbuild';

import { createBuildOptions } from './createBuildOptions.mts';

await build(
  createBuildOptions({
    buildOptions: {
      minify: true,
      outdir: 'dist-prod/',
    },
    htmlPluginConfiguration: {
      inline: {
        js: false,
        css: false,
      },
    },
  }),
);
