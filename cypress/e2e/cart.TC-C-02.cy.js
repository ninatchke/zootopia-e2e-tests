describe('კალათის რაოდენობის ცვლილება პროდუქტის დამატებით', () => {
  before(() => {
    cy.fixture('login').as('userData');
  });

  beforeEach(function () {
    cy.openLoginPage();
    cy.login(this.userData.email, this.userData.password);

    const categoryPath = encodeURIComponent('115-საკვები');
    cy.visit(`https://testzootopia.loremipsum.ge/ka/category/${categoryPath}`);
  });

  it('პროდუქტის დამატება კალათაში და URL-ის გადამოწმება', () => {
    cy.get('.product-item').first().within(() => {
      cy.get('div.product-cart').should('be.visible').click();
    });

    cy.contains('დამატებულია').should('be.visible');
    cy.url().should('include', '/ka');
  });
});