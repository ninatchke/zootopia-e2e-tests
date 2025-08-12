Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('button').contains('შესვლა').click();
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="პაროლი"]').type(password);
  cy.get('button[type="submit"]').click();
});
Cypress.Commands.add('openRegistrationPage', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka');
  cy.get('a.iprof > p').contains('შესვლა').scrollIntoView().click({ force: true });
  cy.contains('გაიარეთ რეგისტრაცია').click();
});

Cypress.Commands.add('fillRegistrationForm', (user) => {
  cy.get('input[name="first_name"]').type(user.first_name);
  cy.get('input[name="personal_id"]').type(user.personal_id);
  cy.get('input[name="reg_email"]').type(user.email);
  cy.get('input[name="phone"]').type(user.phone);
  cy.get('input[name="reg_password"]').type(user.password);
  cy.get('input[name="reg_password_confirmation"]').type(user.password);
  cy.get('#Path_10302').click();
});
Cypress.Commands.add('openLoginPage', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka');
  cy.get('a.iprof > p')
    .contains('შესვლა')
    .scrollIntoView()
    .click({ force: true });
});

Cypress.Commands.add('openLoginPage', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka');
  cy.get('a.iprof > p')
    .contains('შესვლა')
    .scrollIntoView()
    .click({ force: true });
});

Cypress.Commands.add('loginWithCredentials', (email, password) => {
  cy.get('input[name="login_email"]').type(email);
  cy.get('input[name="login_password"]').type(password);
  cy.get('button.form-button').contains('ავტორიზაცია').click();
});

Cypress.Commands.add('openLoginPage', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka');
  cy.get('a.iprof > p').contains('შესვლა').scrollIntoView().click({ force: true });
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('input[name="login_email"]').type(email);
  cy.get('input[name="login_password"]').type(password);
  cy.get('button.form-button').contains('ავტორიზაცია').click();
});
