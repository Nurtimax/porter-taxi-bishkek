describe('Landing page', () => {
  it('shows the phone number as a call link', () => {
    cy.visit('/')
    cy.contains('h1', 'ЭВАКУАТОР')
    cy.get('a[href="tel:+996703214161"]').should('exist')
    cy.contains('0703 214 161')
  })
})
