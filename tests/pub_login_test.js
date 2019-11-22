
const { I, pubLogin} = inject();
Feature('Pub login');
let pub_url='http://beta.publishers.yyakovlev.developzilla.com/login';
let pub_login = 'yyakovlev';
let pub_password='password123';

Before(() => {
    I.amOnPage(pub_url);
});



Scenario('Pub login', () => {
    I.see(pubLogin.loginField);
    pause();
    I.see('Password');
    I.fillField('Login',pub_login);
    I.fillField('Password',pub_password);
    I.wait();
    I.see('button[type="button"]');
    I.click('Sign in','type="button"');
     I.waitForText('You have not confirmed your account yet.',10)   
 
});
