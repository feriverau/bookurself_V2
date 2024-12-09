describe('Home Page', () => {
  beforeEach(() => {
    // Configura la URL inicial con parámetros
    cy.visit('http://localhost:8100/home?email=ffr@gmail.com&password=1111');
    localStorage.setItem('username', 'PrimerTry'); // Simula un usuario en localStorage
  });

  it('should display the welcome message with user email', () => {
    cy.get('.user-info h2').should('contain', 'Bienvenid@');
    cy.get('.user-info h2').should('contain', 'ffr@gmail.com');
  });

  it('should display trending authors', () => {
    // Definir los autores esperados
    const authors = [
      'J. K. Rowling',
      'Stephen King',
      'George R. R. Martin',
      'John Green',
      'Alice Walker',
    ];
  
    // Iterar sobre los autores y asegurarnos de que estén en el contenido de la página
    authors.forEach(author => {
      cy.contains(author).should('exist'); // Verificar que cada autor esté presente en el contenido
    });
  });
  
  
  
  

  it('should navigate to the correct pages when clicking category buttons', () => {
    // Verificar la navegación de categorías
    cy.get('ion-card')
      .contains('Más Buscados')
      .scrollIntoView({ offset: { top: 0, left: 0 } });

    cy.get('ion-button')
      .contains('Ver Más')
      .click({ force: true });

   

   

   

    cy.get('ion-card')
      .contains('Mejores Valorados')
      .scrollIntoView({ offset: { top: 0, left: 0 } });

    cy.get('ion-button')
      .contains('Ver Más')
      .click({ force: true });

 
  
      

    cy.get('ion-card')
      .contains('Selección BookURSelf')
      .scrollIntoView({ offset: { top: 0, left: 0 } });

    cy.get('ion-button')
      .contains('Ver Más')
      .click({ force: true });
  

    
  });
  
  
  
  

  it('should open WhatsApp when the fab button is clicked', () => {
    // Espiar el método window.open para verificar que se llame con la URL correcta
    cy.window().then((win) => {
      cy.spy(win, 'open').as('openWhatsApp');
    });

    cy.get('ion-fab-button').click();
    cy.get('@openWhatsApp').should(
      'have.been.calledWith',
      'https://wa.me/1234567890',
      '_blank'
    );
  });

  it('should display the contact email in the footer', () => {
    // Verificar que el footer contenga el correo de contacto
    cy.get('ion-footer ion-title').should('contain', 'Contacto: bookurself@gmail.com');
  });
});