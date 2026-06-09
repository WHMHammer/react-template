import { playwright } from '@vitest/browser-playwright';
import { configDefaults, defineConfig } from 'vitest/config';

// biome-ignore lint/style/noDefaultExport: vitest
export default defineConfig({
  test: {
    ...configDefaults,
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'firefox' },
        { browser: 'chromium' },
        { browser: 'webkit' },
      ],
      headless: true,
    },
  },
});
