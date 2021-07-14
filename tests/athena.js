module.exports = {
    'Login to Astraliferaydev' : function(browser){
        browser
            .url('https://astraliferaydev.astra.co.id/')
            .waitForElementVisible('body')
            .setValue('.inputUsername','user.testing1@ai.astra.co.id')
            .setValue('.inputPassword','Pass')
            .pause(2000)
            .keys(browser.Keys.ENTER)
            .setValue('#_com_liferay_login_web_portlet_LoginPortlet_otp','1234')
            .click('.spacebutton')
            .waitForElementVisible('body') 
            .useXpath()
            .click("//a[.='Insan Astra']")
            .click ("//*[contains(text(),'Astra Head Office')]")
            .click ("//ul[@class='menu-level-3']//a[contains(.,'Head Office')]")
            .click ("//ul[@class='menu-level-4']//a[contains(.,'Corporate Legal')]")
            .click ("//ul[@class='menu-level-5']//a[contains(.,'Astra E-Approval New')]")
            .useCss()
            .setValue('#username','user.testing1@ai.astra.co.id')
            .setValue('#password','JKL7F4suVT#')
            .keys(browser.Keys.ENTER)
            .verify.urlEquals('https://astraliferaydev.astra.co.id/group/e-approval-new', 'Success')
            .pause(2000)
        }
}