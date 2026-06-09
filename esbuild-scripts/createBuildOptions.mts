import {
  type HtmlFileConfiguration,
  htmlPlugin,
} from '@craftamap/esbuild-plugin-html';
import type { BuildOptions } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

const entryPoints = ['src/index.tsx'];

export interface CustomBuildOptions {
  buildOptions?: Partial<BuildOptions>;
  htmlPluginConfiguration?: Partial<HtmlFileConfiguration>;
}

export const createBuildOptions: (
  customBuildOptions: CustomBuildOptions,
) => BuildOptions = ({ buildOptions, htmlPluginConfiguration }) => ({
  bundle: true,
  metafile: true,
  entryPoints,
  plugins: [
    sassPlugin(),
    htmlPlugin({
      files: [
        {
          filename: 'index.html',
          entryPoints,
          title: 'Hello',
          htmlTemplate: 'src/index.html',
          define: undefined,
          scriptLoading: undefined,
          favicon: undefined,
          findRelatedCssFiles: true,
          inline: undefined,
          extraScripts: undefined,
          hash: false,
          ...htmlPluginConfiguration,
        },
      ],
    }),
  ],
  target: ['es2017'],
  ...buildOptions,
});
