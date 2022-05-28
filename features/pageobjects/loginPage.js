const expectchai = require('chai').expect

class LoginPage {

    get userName() {
        return $("input[name='username']")
    }
    get password() {
        return $("//input[@type='password']")
    }
    get alert() {
        return $(".alert-danger")
    }
    get signIn() {
        return $("#signInBtn")
    }
    get textInfo() {
        return $("p")
    }
    get radioButtons() {
        return $$(".customradio")
    }
    get modal() {
        return $(".modal-body")
    }
    get cancel() {
        return $("#cancelBtn")
    }
    get ok() {
        return $("#okayBtn")
    }
    get dropdown() {
        return $("select.form-control") 
    }
    get checkbox() {
        return $("#terms") 
    }

    async expects() {
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await expect($("label[for='username']")).toHaveTextContaining("Username")
        await expect($("label[for='password']")).toHaveTextContaining("Password")
        await expect($("#signInBtn")).toHaveAttr('value', 'Sign In')
    }

    async login(username, password) {
        await this.userName.setValue(username)
        await this.password.setValue(password)
    }

    async adminClick() {
        const admin = this.radioButtons[0]
        await admin.$("span").click()
    }

    async studentClick() {
        const student = this.radioButtons[1]
        await student.$("span").click()
    }
    
    async modalDisplayed() {
        await this.modal.waitForDisplayed()

    }

    async modalExpects() {
        await expect(this.modal).not.toBeDisplayed()
        browser.pause(1000)
    }

    async cancelButton() {
        await this.cancel.click()
    }

    async okButton() {
        await this.ok.click()
    }

    async dropdownSelection(value) {
        await this.dropdown.selectByAttribute('value',value)                                   // Teacher Selection
        browser.pause(2000)
        expectchai(await this.dropdown.getValue()).to.equal(value)
    }

    async checkboxClick() {
        await this.checkbox.click()
        browser.pause(1000)
        await expect($(".termsText")).toHaveTextContaining("terms and conditions")
    }

    async signInClick() {
        await this.signIn.click()
        await browser.pause(4000)
    }
}

module.exports = new LoginPage()