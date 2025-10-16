import { test, expect } from '@playwright/test';

test('Verify login functionlity with valid credential', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('password').fill('admin123')
  await page.getByRole('button',{name:'login'}).click()
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
  
});
