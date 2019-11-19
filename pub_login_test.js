Feature('Pub login');

Scenario('Pub login', (I) => {
    I.amOnPage('http://beta.publishers.yyakovlev.developzilla.com/login');
    I.see('Login');
    I.see('Password');
    I.fillField('Login','yyakovlev');
    I.fillField('Password','password123');
    pause();
    I.see('Sign in','type="button"');
    I.click('Sign in','type="button"');
     I.waitForText('You have not confirmed your account yet.',10)   
 
});
