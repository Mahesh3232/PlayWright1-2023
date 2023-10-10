const {test,expect} = require('@playwright/test')

test('Verify singal fileuplode in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UplodeFiles/FileUplode1.pdf')
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('Your file has now been uploaded!')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url())
    .toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUplode1.pdf')
    await page.waitForTimeout(5000)
})

test.only('Varify Multiple file uplode in playwright',async({page})=>{
    const file1 = 'tests/UplodeFiles/FileUplode1.pdf'
    const file2 = 'tests/UplodeFiles/FileUplode2.pdf'
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    // await page.locator('#filesToUpload')
    // .setInputFiles(['tests/UplodeFiles/FileUplode1.pdf','tests/UplodeFiles/FileUplode2.pdf'])
    await page.locator('#filesToUpload')
    .setInputFiles([file1,file2])
    await expect(page.locator('#fileList > li').first()).toHaveText('FileUplode1.pdf')
    await expect(page.locator('#fileList > li').nth(1)).toHaveText('FileUplode2.pdf')
    await page.waitForTimeout(5000)
})


