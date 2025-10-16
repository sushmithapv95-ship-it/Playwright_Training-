import { test, expect } from '@playwright/test';

test('Verify login functionlity with valid credential', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'List of All Orders' }).click();
  await page.getByRole('link', { name: 'Order', exact: true }).click();
  await page.getByRole('textbox', { name: 'Quantity:*' }).click();
  await page.getByRole('textbox', { name: 'Quantity:*' }).fill('4');
  await page.getByRole('textbox', { name: 'Customer name:*' }).click();
  await page.getByRole('textbox', { name: 'Customer name:*' }).fill('Raghav');
  await page.getByRole('textbox', { name: 'Street:*' }).click();
  await page.getByRole('textbox', { name: 'Street:*' }).fill('Hegde nagar');
  await page.getByRole('textbox', { name: 'City:*' }).click();
  await page.getByRole('textbox', { name: 'City:*' }).fill('Bangalore');
  await page.getByRole('textbox', { name: 'Zip:*' }).click();
  await page.getByRole('textbox', { name: 'Zip:*' }).fill('184123');
  await page.getByRole('cell', { name: 'Visa', exact: true }).click();
  await page.getByRole('textbox', { name: 'Card Nr:*' }).click();
  await page.getByRole('textbox', { name: 'Card Nr:*' }).fill('4345656784');
  await page.getByRole('textbox', { name: 'Expire date (mm/yy):*' }).click();
  await page.getByRole('textbox', { name: 'Expire date (mm/yy):*' }).fill('05/25');
  await page.getByRole('link', { name: 'Process' }).click();
  await page.getByText('New order has been').click();
  await expect(page.getByText('New order has been')).toBeVisible();
});
