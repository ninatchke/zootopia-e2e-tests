describe('კალათიდან პრდუქტის წაშლა', () => {
  before(() => {
    cy.fixture('login').as('userData');
  });

  it('პროდუქტის დამატება და წაშლა კალათიდან', function () {
    cy.openLoginPage();
    cy.login(this.userData.email, this.userData.password);

    const categoryPath = encodeURIComponent('115-საკვები');
    cy.visit(`https://testzootopia.loremipsum.ge/ka/category/${categoryPath}`);

    cy.url().should('include', 'category');

    cy.get('.product-item').first().within(() => {
      cy.get('div.product-cart').should('be.visible').click();
    });

    cy.visit('https://testzootopia.loremipsum.ge/ka/cart');

    
    cy.get('.cart-item').should('have.length.greaterThan', 0);

    cy.get('.cart-item').first().within(() => {
      cy.get('figure.clear > a[href*="remove_from_cart"]').click();
    });

    cy.get('.cart-item').should('have.length', 0);
  });
});