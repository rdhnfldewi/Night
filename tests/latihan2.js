// module.exports = {
//     'step one: navigate to ecosia.org': function(browser) {
//       browser
//         .url('https://www.ecosia.org')
//         .waitForElementVisible('body')
//         .assert.titleContains('Ecosia')
//         .assert.visible('input[type=search]')
//         .setValue('input[type=search]', 'nightwatch')
//         .assert.visible('button[type=submit]');
//     },
  
//     'step two: click submit' : function (browser) {
//       browser
//         .click('button[type=submit]')
//         .assert.containsText('.mainline-results', 'Nightwatch.js')
//         .end();
//     }
//   };

module.exports = {
  "Donate to Black Lives Matter": (browser) => {
    browser.url("https://blacklivesmatter.com/");
    browser.pause(1 * 1000)

    const dismissPopup = "#popmake-5034 > button";
    browser.click(dismissPopup);
    browser.pause(1 * 1000)

    const donate =
      "#menu-primary-menu > li.menu-highlight.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-2813.nav-item > a";
    browser.click(donate);
    browser.pause(3 * 1000)
  },
};