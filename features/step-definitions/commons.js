import { Given, When, Then } from '@wdio/cucumber-framework';
var base = require('../pageobjects/base');
var loginPage = require('../pageobjects/loginPage');
var productPage = require('../pageobjects/productsPage')
var checkoutPage = require('../pageobjects/checkoutPage')



Given(/^I am on the login page$/, async() => {
    await browser.url('/loginpagePractise/')
    await loginPage.expects()
});

When(/^I login with (.+) and (.+)$/, async(username, password) => {
    await loginPage.login(username, password)
});

When(/^select correct user and (.+)$/, async (role) => {
    await loginPage.studentClick()
    await loginPage.modalDisplayed()
    await loginPage.cancelButton()

    await loginPage.studentClick()
    await loginPage.modalDisplayed()
    await loginPage.okButton() 
  
    await loginPage.adminClick()
    await loginPage.modalExpects()

    await loginPage.dropdownSelection(role)
});

When(/^agree to terms and conditions$/, async () => {
    await loginPage.checkboxClick()
});

Then(/^should click on Sign In$/, async() => {
    await loginPage.signInClick()
    await base.checkboxClickable()
    await base.titleExpects('ProtoCommerce')
});



Given(/^I am on the product page$/, async() => {
    await browser.url('/angularpractice/shop')
    await base.checkboxClickable()
    await base.titleExpects('ProtoCommerce')
    await productPage.expects()
});

When(/^I click on Home Page$/, async() => {
    await productPage.homeClick()
    await productPage.submitClickable()
});

When(/^submit form for future email promotions with (.+), (.+), (.+), (.+), (.+), and (.+)$/, async(name, email, password, gender, employment, birthdate) => {
    await productPage.setName(name)
    await productPage.setEmail(email)
    await productPage.setPassword(password)
    await productPage.setCheckbox()
    await productPage.setDropdown(gender)
    await productPage.setEmployment(employment)
    await productPage.setBirthDate(birthdate)
    await productPage.submitClick()

    await base.alertExpects()
});

When(/^I click on Shop Page$/, async() => {
    await productPage.shopClick()
});

When(/^I click on Catageory Link$/, async () => {
    await productPage.categoryClick()
});

Then(/^should click on Shop Page$/, async() => {
    await productPage.shopClick()
});



When(/^I add (.+) to Cart and go to Checkout Page$/, async (products) => {
    await checkoutPage.addProductToCart(products)
    await base.checkboxClick()
});

When(/^remove necessary products (.+) and checkout$/, async (remove) => {
    await checkoutPage.removeProduct(remove)
    await checkoutPage.statusCheck() 
    await checkoutPage.priceCheck()
    await checkoutPage.goToCheckout()
});

Then(/^send in (.+) address, purchase and get confirmation$/, async (delivery) => {
    await checkoutPage.expect()
    await checkoutPage.setDeliveryLocation(delivery)
    await checkoutPage.waitOnEllipsis()
    await checkoutPage.termsClick()
    await checkoutPage.purchaseClick()

    await base.alertDisplayed()
    await base.alertExpects()
    await base.alertClose() 
});
