import { test, expect } from '@playwright/test';

test('Verify login functionlity with valid credential', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("//input[Class='oxd-input oxd-input--active']").fill('Admin')
  await page.getByPlaceholder('password').fill('admin123')
  await expect(page.getByRole('button',{name:'login'})).toBeVisible();
  await page.getByRole('button',{name:'login'}).click()
  
});

