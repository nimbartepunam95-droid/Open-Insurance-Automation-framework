import{Page ,Locator}from'@playwright/test';

export class Loginfile{
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;


    constructor(page:Page){

        this.usernameInput=page.locator('input[type="text"]');
        this.passwordInput=page.locator('input[type="password"]');
        this.loginButton=page.locator(':text-is("LOG IN")');
    }
    async login(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }  
    async navigateToLoginPage(){
        await this.loginButton.page().goto('https://demo.openimis.org/front/login/');
    }
    
}       
