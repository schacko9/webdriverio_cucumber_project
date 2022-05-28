const expectchai = require('chai').expect

class Base{
    
    get checkout() {
        return $("*=Checkout")
    }

    get alert() {
        return $("div.alert")
    }

    get close() {
        return $("a.close")
    }

    async checkboxClickable() {
        await this.checkout.waitForClickable()
    }

    async checkboxClick() {
        await this.checkout.click()
        await browser.pause(2000)
    }

    async titleExpects(title) {
        console.log(await browser.getTitle())     
        await expect(browser).toHaveTitleContaining(title)
    }

    async alertExpects() {
        await expect(this.alert).toHaveTextContaining("Success!")
        await browser.pause(1000)
    }

    async alertDisplayed() {
        await this.alert.waitForDisplayed()
    }

    async alertClose() {
        await this.close.click()
        await browser.pause(1000)
    }

}
module.exports = new Base()
