describe('რეგისტრაცია სწორი მონაცემებით', () => {
  beforeEach(() => {
    cy.openRegistrationPage();
  });

  it('should NOT show success message after registration', () => {
    cy.fixture('newuser').then(user => {
      const userData = {
        ...user,
        email: `natiakaka+${Date.now()}@gmail.com`
      };

      cy.fillRegistrationForm(userData);
      cy.contains('button.regsub', 'რეგისტრაცია').click();

    
      cy.url().should('eq', 'https://testzootopia.loremipsum.ge/ka/register');

      
      cy.contains('წარმატებით გაიარეთ რეგისტრაცია').should('not.exist');
    });
  });
});