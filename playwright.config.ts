import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.spec.ts',
  use: {
    headless: true,
    channel: 'chrome'
  },
webServer: {
  command: 'npm run dev',
  url: 'http://localhost:3000',
  reuseExistingServer: true
}

});
