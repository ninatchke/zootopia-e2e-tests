describe('Login Page Tests', () => {
  it('წარმატებული ავტორიზაცია და მთავარ გვერდზე გადამისამართება', () => {
    cy.openLoginPage();

    cy.fixture('login').then(user => {  
      cy.login(user.email, user.password);

      
      cy.url().should('include', '/ka');

      cy.get('h2 > span').should('contain.text', 'ფართო');
    });
  });
});
