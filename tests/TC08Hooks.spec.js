//beforeEach ==> runs before every  Test Block 
//AfterEach  ==> runs after every Test Block 
//beforeAll ==> Run only 1time before all test block 
//AfterAll ==> Run only 1 time after all test block 
const { test, expect } = require('@playwright/test')
let page

// test.beforeEach(async({browser})=>{
//     page = await browser.newPage()
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await page.locator('input[name="username"]').fill('Admin')
//     await page.locator('input[name="password"]').fill('admin123')
//     await page.locator('button[type="submit"]').click()
// })

// test.afterEach(async()=>{
//     await page.locator('.oxd-userdropdown-name').click()
//     await page.locator('[href="/web/index.php/auth/logout"]').click()
// })

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
})

test.afterAll(async () => {
    await page.locator('.oxd-userdropdown-name').click()
    await page.locator('[href="/web/index.php/auth/logout"]').click()
    await page.waitForTimeout(3000)
})

test('Verify the logo on homeoage', async () => {
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
})

test('Verify the URL and title of the page', async () => {
    await expect(page.locator('.oxd-alert-content-text')).toBeVisible()
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
    // await expect(page).toHaveTitle('OrangeHRM')
    // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

