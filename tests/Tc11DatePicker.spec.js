const { test, expect } = require('@playwright/test')

test('Verify the date picker using playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('11-29-2023')
    await page.waitForTimeout(5000)
})

test.only('2nd way Verify DatePicker Using playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    await page.locator('#datepicker').click()
    const year = "2026"
    const month = "May"
    const day = "24"
    //console.log(`${month} ${year}`)
    while(true){
        const currentMonthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        if(currentMonthYear == `${month} ${year}`){
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    await page.waitForTimeout(5000)
})