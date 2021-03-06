class LoginPage {
    
    get email  () { return $('#email') }
    get emailMsg  () { return $('#email-msg') }
    get password () { return $('#password') }
    get passwordMsg () { return $('#password-msg') }
    get btnSign () { return $('#btn-sub') }
    get btnReset () { return $('#btn-reset') }
    get msgValidations () { return $('#validations') }
    get labelEmail () { return $('labelEmail') }
    get labelPass  () { return $('labelPass') }
 

  
    setEmail (email) {
        this.emailInput.setValue(email);
        this.emailInput.keys("Tab");
    }

    setPassword (password) {
        this.passwordInput.setValue(password);
        this.passwordInput.keys("Tab");
    }

  
    login (email, password) {
        this.setEmail(email);
        this.setPassword(password);
        this.btnSign.click();
    }

    open () {
        return browser.url('https://github.com/MicaRolle/week-14/register.html');
    }
}

module.exports = new LoginPage();