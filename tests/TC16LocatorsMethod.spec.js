const { test, expect } = require('@playwright/test');
// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle
test('Get element by getByAltText in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(ele).toBeVisible()
})

test('Get element by getbylabel in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/test#google_vignette')
    let ele1 = await page.getByLabel('main navigation')
    await expect(ele1).toBeVisible()
})

test('Get element by getByPlaceholder in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('Mahesh')
})

test('Get element by getByRole in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    await page.getByRole('checkbox', { name: ' I agree to the ' }).check()
    await page.waitForTimeout(4000)
})

test('Get element by getBytext in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    await expect(page.getByText(' Radio & Checkbox')).toBeVisible()
    await page.getByText('Sign up').click()
    await page.waitForTimeout(4000)
})

test('Get element by getByTitle in playwright', async ({ page }) => {
    await page.goto('https://letcode.in/radio')
    let ele1 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele1).toBeVisible()
    await expect(ele1).toHaveText(' Koushik Chatterjee ')
    await page.waitForTimeout(4000)
})

test.only('Get element by getByTestId in playwright', async ({ page }) => {
    await page.goto('https://www.atlassian.com/')
    await page.getByTestId('global-nav-search-icon').click()
    await page.waitForTimeout(4000)
})