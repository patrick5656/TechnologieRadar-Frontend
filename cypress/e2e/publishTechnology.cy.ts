describe('test if a technology can be published', () => {
  it('technology can be published', () => {
    cy.visit('http://localhost:4200/manageTechnologies');
    cy.intercept('GET', 'http://localhost:3000/api/technologies',
      [
        { id: 1, name: 'Technology 1', description: 'Description for Technology 1', category: 'Techniques', ring: 'Adopt', published: false, createdByUserId: 1, createdAt: new Date() },
        { id: 2, name: 'Technology 2', description: 'Description for Technology 2', category: 'Techniques', ring: 'Trial', published: false, createdByUserId: 1, createdAt: new Date() },
        { id: 3, name: 'Technology 3', description: 'Description for Technology 3', category: 'Tools', ring: 'Trial', published: true, createdByUserId: 1, createdAt: new Date() }
      ]
    ).as('getTechnologies');
    cy.wait('@getTechnologies');


    cy.get(':nth-child(2) > :nth-child(6) > a > .iconMinWidth').click();

    cy.get('article').contains('Publish activity: Technology 1');

    cy.get(':nth-child(3) > button').click();
    cy.contains('Ring description is required');

    cy.get('#ring-description-control').clear().type('test description');

    cy.intercept('PUT', 'http://localhost:3000/api/technology/1/publish', (req) => {
      expect(req.body.ring).to.equal('Adopt');
      expect(req.body.ring_description).to.equal('test description');
    }).as('publishTechnology');

    cy.get(':nth-child(3) > button').click();
    cy.wait('@publishTechnology');

    cy.url().should('include', 'http://localhost:4200/manageTechnologies');

  })
})
