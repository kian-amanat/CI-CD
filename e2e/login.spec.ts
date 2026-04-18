import { test, expect } from '@playwright/test';

test('user can login successfully', async ({ page }) => {
  await page.goto('http://localhost:3001/login');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', '123456');

  await page.click('button[type="submit"]');

  await expect(page.getByTestId('login-message')).toHaveText('Login successful');
});
