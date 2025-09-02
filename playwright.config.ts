import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL:"https://stagecms.red.global/",
    headless: false,
    viewport: { width: 1280, height: 720 }
  }
});