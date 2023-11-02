const { test, expect } = require('@playwright/test')

test('Verify the date picker using playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('11-29-2023')
    await page.waitForTimeout(5000)
})

test.only('2nd way Verify DatePicker Using playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    await page.locator('#datepicker').click()
    const year = "2025"
    const month = "June"
    const day = "14"
    //console.log(`${month} ${year}`)
    while (true) {
        const currentMonthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        if (currentMonthYear == `${month} ${year}`) {
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    const dayCount = await page.locator('[class="day"]').count()
    //    await console.log(dayCount)
    for (let i = 0; i < dayCount; i++) {
        let text = await page.locator('[class="day"]').nth(i).textContent() // 1 2 3 24
        if (text == day) {
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
})