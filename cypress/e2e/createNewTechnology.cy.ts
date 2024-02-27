describe('Test create new technology', () => {
  it('tests if it only creates technology when form is valid', () => {
    cy.visit('http://localhost:4200/manageTechnologies');
    cy.intercept('GET', 'http://localhost:3000/api/technologies',
      [
        { id: 1, name: 'Technology 1', description: 'Description for Technology 1', category: 'Techniques', ring: 'Adopt', published: true, createdByUserId: 1, createdAt: new Date() },
        { id: 2, name: 'Technology 2', description: 'Description for Technology 2', category: 'Techniques', ring: 'Trial', published: true, createdByUserId: 1, createdAt: new Date() },
        { id: 3, name: 'Technology 3', description: 'Description for Technology 3', category: 'Tools', ring: 'Trial', published: true, createdByUserId: 1, createdAt: new Date() }
      ]
    ).as('getTechnologies');

    cy.wait('@getTechnologies');


    cy.get('h4 > a > .iconMinWidth').click();


    cy.get('form.ng-untouched > .container > :nth-child(2)').click();
    cy.contains('Name is required');
    cy.contains('Category is required');
    cy.contains('Description is required');

    cy.get('#name-control').type('testName');
    cy.get('#category-control').select('Techniques');
    cy.get('#description-control').type('test description');

    cy.intercept('POST', 'http://localhost:3000/api/technology', (req) => {
      expect(req.body.name).to.equal('testName');
      expect(req.body.category).to.equal('Techniques');
      expect(req.body.description).to.equal('test description');
    }).as('postTechnology');

    cy.get('.ng-submitted > .container > :nth-child(2)').click();
    cy.wait('@postTechnology');

    cy.url().should('include', 'http://localhost:4200/manageTechnologies');

  })
})
