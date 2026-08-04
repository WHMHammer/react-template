// biome-ignore lint/style/noDefaultExport: .lintstagedrc.mjs
export default {
  '*': ['npm run lint', () => 'npm run build:prod', () => 'npm test'],
};
