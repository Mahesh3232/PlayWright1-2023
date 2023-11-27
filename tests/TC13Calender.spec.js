const { test, expect } = require('@playwright/test')

test('Verify datepicker using playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    await page.locator('#datepicker').click()
    const date = new Date()
    //let day = date.getDate()
    date.setDate(date.getDate() + 216)
    //let month = date.toLocaleString('default', { month: 'short' })
    let day = date.getDate() //Cureent date
    let monthIndex = date.getMonth() //Index value of current month 
    let month = date.toLocaleString('default', { month: 'long' }) //Current month in string
    let year = date.getFullYear() //Cureent year 
    //console.log(monthIndex)
    // console.log(month)
     console.log(day)
    // console.log(year)
    const dayStr = `${day} ${month} ${year}`
    const my = `${month} ${year}`
    console.log(dayStr)
    // console.log(my)
    while (true) {
        const currentMonthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        // console.log(currentMonthYear)
        if (currentMonthYear === my) {
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    const daycount = await page.locator('[class="day"]').count()
    console.log(daycount)
    for (let i = 0; i < daycount; i++) {
        let text = await page.locator('[class="day"]').nth(i).textContent()
        console.log(text)
        if (text == day) {
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
})