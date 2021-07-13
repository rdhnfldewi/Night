module.exports = {
    'Login to Astraliferaydev' : function(browser){
        browser
            .url('https://astraliferaydev.astra.co.id/')
            .waitForElementVisible('body')
            .setValue('.inputUsername','amditesting01@ai.astra.co.id')
            .setValue('.inputPassword','pass')
            .pause(2000)
            .keys(browser.Keys.ENTER)
            .setValue('#_com_liferay_login_web_portlet_LoginPortlet_otp','1234')
            .click('.spacebutton')
            .pause(5000)
            .waitForElementVisible('body')
        }
}

// module.exports = {
//     'Login to Astraliferaydev' : function(browser) {
//     browser    
//     .url('https://astraliferaydev.astra.co.id/')
//     .waitForElementVisible('body')
//     .setValue('.inputUsername', 'amditesting02@ai.astra.co.id')
//     .setValue('.inputPassword', 'pass')
//     //.waitForElementVisible('')
//     .pause(2000)
//     .click('.lfr-btn-label', function(result) {
//         this.assert.strictEqual(result.status, 0);
//         })
//     // .setValue('#_com_liferay_login_web_portlet_LoginPortlet_otp','123321')
//     // .click('.spacebutton')
//     // .pause(2000)
//     // .waitForElementVisible('body')
//     }
//    }

// module.exports = {
//     'login to astraliferaydev URL' : (browser) => {
//     browser
//     .url('https://astraliferaydev.astra.co.id/')
//     .waitForElementVisible('body')
//     .setValue('.inputUsername', 'user.testing1@ai.astra.co.id')
//     .setValue('.inputPassword', 'pass')
//     .click('.btn-primary')
//     .setValue('#_com_liferay_login_web_portlet_LoginPortlet_otp', 'wkwk')
//     .click('.spacebutton')
//     .waitForElementVisible('body')
//     }
// }

// module.exports = {
//     'test first run' : function(browser) {
//     browser
//     .url('https://astraliferaydev.astra.co.id/')
//     .waitForElementVisible('body')
//     .useXpath()
//     .setValue("//input[@id='_com_liferay_login_web_portlet_LoginPortlet_login']", 'amditesting02@ai.astra.co.id')
//     .pause(2000)
//     .setValue("//input[@id='_com_liferay_login_web_portlet_LoginPortlet_password']", 'pass')
//     .pause(2000)
//     .useCss()
//     .click(".lfr-btn-label")
//     .pause(5000)
//     .waitForElementVisible('body')
//     .useXpath()
//     .setValue("//input[@id='_com_liferay_login_web_portlet_LoginPortlet_otp']", '132321')
//     // .useXpath()
//     .useXpath()
//     .click("//span[.='Enter OTP']")
//     .useCss()
//     .waitForElementVisible('body')
//     .pause(5000)
//     }
//    }