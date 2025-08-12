describe('კალათის გასუფთავების ღილაკის არარსებობის ტესტი', () => {
  before(() => {
    cy.fixture('login').as('userData');  
  });

  beforeEach(function () {
    cy.openLoginPage();                  
    cy.login(this.userData.email, this.userData.password);  
    
    cy.visit('https://testzootopia.loremipsum.ge/ka/cart'); 
  });

  it('ამოწმებს, რომ "კალათის გასუფთავება" ღილაკი არ არის', () => {
    
    cy.contains('კალათის გასუფთავება').should('not.exist');
    
    
    cy.url().should('include', '/ka/cart');
  });
});