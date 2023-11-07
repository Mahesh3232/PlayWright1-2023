const { test, expect } = require('@playwright/test')

test('Verify singal fileUplode in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UplodingFiles/FileUplode1.pdf')
    page.on('dialog', async SimpleAlt => {
        await expect(SimpleAlt.message()).toContain('Your file has now been uploaded!')
        await expect(SimpleAlt.type()).toContain('alert')
        await SimpleAlt.accept()
    })
    await page.locator('#submit-button').click()
    await page.waitForTimeout(4000)
    await expect(page.url())
        .toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUplode1.pdf')
})

test.only('Varify multiple file uplode in playwright',async({page})=>{
    const File1 = 'tests/UplodingFiles/FileUplode1.pdf'
    const File2 = 'tests/UplodingFiles/FileUplode2.pdf'
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload')
    .setInputFiles([File1,File2])
    await expect(page.locator('#fileList > li').first()).toHaveText('FileUplode1.pdf')
    await expect(page.locator('#fileList > li').nth(1)).toHaveText('FileUplode2.pdf')
    await page.waitForTimeout(5000)
})