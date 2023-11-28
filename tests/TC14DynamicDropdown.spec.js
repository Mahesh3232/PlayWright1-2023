const { test, expect } = require('@playwright/test')

test('Verify dynyamic dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune', { delay: 1000 })
    await page.waitForSelector('.placeHolderMainText')
    const optionCount = await page.locator('.placeHolderMainText').count()
    console.log(optionCount)
    for(let i =0;i<optionCount;i++){
        let resultText = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText)//pune //Sangamvadi //shivajinager //nigdi
        if(resultText === 'Nigdi'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
    //destination
    await page.locator('#dest').fill('Mumbai', { delay: 1000 })
    await page.waitForSelector('.sc-iwsKbI > .sc-gZMcBi.grvhsy > .placeHolderMainText')
    const destOptionCount = await page.locator('.sc-iwsKbI > .sc-gZMcBi.grvhsy > .placeHolderMainText').count()
    console.log(destOptionCount)
})