import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import type { UserConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';

type Require<T, K extends keyof T> = Omit<T, K> & Pick<Required<T>, K>;

// https://vite.dev/config/
// biome-ignore lint/style/noDefaultExport: vite config
export default defineConfig(({ mode }) => {
  const config: Require<UserConfig, 'build'> = {
    build: { chunkImportMap: true },
    plugins: [react()],
    preview: { open: true },
    server: { open: true },
    test: {
      ...configDefaults,
      browser: {
        enabled: true,
        headless: true,
        instances: [
          { browser: 'firefox' },
          { browser: 'chromium' },
          { browser: 'webkit' },
        ],
        provider: playwright(),
      },
    },
  };

  switch (mode) {
    case 'development':
      config.build = {
        ...config.build,
        outDir: 'dist-dev',
        sourcemap: true,
        minify: false,
      };
      break;

    case 'production':
      config.build = {
        ...config.build,
        license: true,
        outDir: 'dist-prod',
        manifest: true,
      };
      break;
  }

  return config;
});
