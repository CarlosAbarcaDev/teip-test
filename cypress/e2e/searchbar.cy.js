
describe('Search bar testing', () => {
    it('should render first request', () => {
      cy.visit('http://127.0.0.1:5173/')
  });

    it('Search', () => {
      cy.get("#search-bar").type("morty{enter}");
      
    });
    
  
  });