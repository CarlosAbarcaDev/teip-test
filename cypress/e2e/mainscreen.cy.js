

describe('API testing', () => {
  it('should render first request', () => {
    cy.visit('http://127.0.0.1:5173/')
});

  it('fetches Data', () => {
      cy.request('https://rickandmortyapi.com/api/character/').as('request');
      cy.get('@request').then(request => {
          expect(request.status).to.eq(200);
          assert.isObject(request.body, 'Response is an Object')
      });
  });

  it('See details', () => {
    cy.get("#details").click();
    cy.server()
    cy.route('/details/**')
    
  });
  

});