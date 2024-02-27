describe('test if update of a technology works', () => {
  it('can update an existing technology', () => {
    cy.visit('http://localhost:4200/manageTechnologies');
    cy.intercept('GET', 'http://localhost:3000/api/technologies',
      [
        { id: 1, name: 'Technology 1', description: 'Description for Technology 1', category: 'Techniques', ring: 'Adopt', published: false, createdByUserId: 1, createdAt: new Date() },
        { id: 2, name: 'Technology 2', description: 'Description for Technology 2', category: 'Techniques', ring: 'Trial', published: false, createdByUserId: 1, createdAt: new Date() },
        { id: 3, name: 'Technology 3', description: 'Description for Technology 3', category: 'Tools', ring: 'Trial', published: true, createdByUserId: 1, createdAt: new Date() }
      ]
    ).as('getTechnologies');
    cy.wait('@getTechnologies');

    const technology = { id: 1, name: 'Technology 1', description: 'Description for Technology 1', category: 'Techniques', ring: 'Adopt', ring_description: 'ring description', published: true, createdByUserId: 1, createdAt: new Date() };
    cy.intercept('GET', 'http://localhost:3000/api/technology/1',
        technology
    ).as('getTechnology');

    cy.get(':nth-child(2) > :nth-child(7) > a > .iconMinWidth').click();
    cy.wait('@getTechnology');

    cy.get('#name-control').should('have.value', technology.name);
    cy.get('#description-control').should('have.value', technology.description);
    cy.get('#ring-description-control').should('have.value', technology.ring_description);
    cy.get('#category-control').invoke('val').should('eq', technology.category);
    cy.get('#ring-control').invoke('val').should('eq', technology.ring);

    cy.get('#name-control').clear().type('new name1');
    cy.get('#ring-description-control').clear().type('new ring description');

    cy.intercept('PUT', 'http://localhost:3000/api/technology/1', (req) => {
      expect(req.body.name).to.equal('new name1');
      expect(req.body.category).to.equal(technology.category);
      expect(req.body.description).to.equal(technology.description);
    }).as('updateTechnology');

    cy.intercept('PUT', 'http://localhost:3000/api/technology/1/ring', (req) => {
      expect(req.body.ring).to.equal(technology.ring);
      expect(req.body.ring_description).to.equal('new ring description');
    }).as('updateTechnologyRing');

    cy.get('form.ng-valid > .container > :nth-child(2)').click();
    cy.wait('@updateTechnology');
    cy.wait('@updateTechnologyRing');


    cy.url().should('include', 'http://localhost:4200/manageTechnologies');

  })
})
