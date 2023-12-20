const base = require('@playwright/test')


exports.customTest = base.test.extend(
    {
        testDataForContactUS: {
            fstName: "Mahesh",
            lstName: "Aher",
            email: "mahesh@gmail.com",
            msg: "I am learning Playwright",
            fstName2:"Rushi"
        }
    }
)