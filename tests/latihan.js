module.exports = {
    'go to astraliferaydev URL' : function(browser){
        browser
            .url('https://astraliferaydev.astra.co.id/')
            .waitForElementVisible('body')

        }
}