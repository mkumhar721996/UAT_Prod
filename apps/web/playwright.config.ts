import { defineConfig, devices } from '@playwright/test'

const port = Number(process.env.ARC_WEB_PORT) || 3011

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${port}`,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'pnpm preview --port ' + port,
    port,
    reuseExistingServer: !process.env.CI,
  },
})
