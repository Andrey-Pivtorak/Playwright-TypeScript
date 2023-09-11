import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('test', async ({ page }) => {

  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login('tomsmith2', 'SuperSecretPassword!');
  await page.waitForTimeout(3000); //use only for debugging!

  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
  // await page.goto('https://the-internet.herokuapp.com/secure');
});
