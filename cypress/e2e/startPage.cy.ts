describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:4200');
    cy.intercept('GET', /http:\/\/localhost:3000\/api\/technologies/,
      [
        { id: 1, name: 'Technology 1', description: 'Description for Technology 1', category: 'Techniques', ring: 'Adopt', published: true, createdByUserId: 1, createdAt: new Date() },
        { id: 2, name: 'Technology 2', description: 'Description for Technology 2', category: 'Techniques', ring: 'Trial', published: true, createdByUserId: 1, createdAt: new Date() },
        { id: 3, name: 'Technology 3', description: 'Description for Technology 3', category: 'Tools', ring: 'Trial', published: true, createdByUserId: 1, createdAt: new Date() }
      ]
    ).as('getTechnologies');

    cy.wait('@getTechnologies');

    cy.get(':nth-child(2) > h5').contains('Techniques');
    cy.get(':nth-child(3) > h5').contains('Tools');

    cy.get('#ring').click();

    cy.get(':nth-child(2) > h5').contains('Adopt');
    cy.get(':nth-child(3) > h5').contains('Trial');

  })
})
