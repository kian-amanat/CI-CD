import { test, expect } from '@playwright/test';

test('home page renders', async ({ page }) => {
  await page.goto('http://localhost:3001/');

  // این را طبق صفحه Home خودت تنظیم کن
  // اگر heading با این متن داری، درست است
  await expect(page.locator('h1')).toBeVisible();
});
