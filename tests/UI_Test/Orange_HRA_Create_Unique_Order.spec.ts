import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('heading', { name: '/ User Management' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('heading', { name: 'Add User' }).click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  //await page.pause();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  // await page.getByRole('option', { name: 'John Doe A' }).click();
  await page.waitForTimeout(3000)  
await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(2).click();

const d = new Date();
   let ms = d.getMilliseconds();

  const ExpUserName = 'Raghav' + ms;
  await page.getByRole('textbox').nth(2).click()
    await page.getByRole('textbox').nth(2).fill(ExpUserName);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.waitForTimeout(5000)

  await page.waitForSelector(".orangehrm-container")
  await expect(page.locator(".orangehrm-container")).toContainText(ExpUserName)

  //await expect(page.locator("//td[text()='"+ExpUserName+"']")).toHaveText(ExpUserName)
});