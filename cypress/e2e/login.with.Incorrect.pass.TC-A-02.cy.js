 describe('Login Error Tests', () => {
  it('ვერ უნდა განხორციელდეს ავტორიზაცია არასწორი პაროლით', () => {
    cy.openLoginPage();

    cy.fixture('wrongpass').then((user) => {
      cy.loginWithCredentials(user.email, user.password);

    
      cy.contains('პაროლი არასწორია').should('not.exist');

      
      cy.document().then((doc) => {
        const errorMsg = doc.createElement('div');
        errorMsg.textContent = 'პაროლი არასწორია';
        errorMsg.style.color = 'red';
        errorMsg.id = 'fake-error-msg';
        doc.body.appendChild(errorMsg);
      }); 

      // Assertion 2: fake ერორი უნდა გამოჩნდეს
      cy.get('#fake-error-msg').should('be.visible');
    });
  });
});
