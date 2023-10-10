// // @ts-check
 const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('fill the textbox', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons')
  await page.locator('[class="header-text"]').first().click()
  await page.waitForTimeout(3000)
  await page.locator('[class="header-text"]').first().click()
  await page.waitForSelector('#item-0 >span')
  await page.locator('#item-0 >span').first().click()
  await page.locator('[placeholder="Full Name"]').fill('RUPALI KIRAN NAVALE')
  await page.locator('[placeholder="name@example.com"]').fill('rupali@gmail.com')
  await page.locator('[placeholder="Current Address"]').fill('SANGAMNER')
  await page.locator('#permanentAddress').fill('PUNE')
  await page.waitForTimeout(5000)
  await page.locator('#submit').click()
})