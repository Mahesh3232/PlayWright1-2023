const {test,expect} = require('@playwright/test')

test('Handle js simple alert with playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async simapleAlert =>{
        await expect(simapleAlert.message()).toContain('I am a JS Alert')
        await expect(simapleAlert.type()).toContain('alert')
        await simapleAlert.accept()
        //await console.log(simapleAlert.message())
        //await console.log(simapleAlert.type())

    })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.waitForTimeout(5000)
})