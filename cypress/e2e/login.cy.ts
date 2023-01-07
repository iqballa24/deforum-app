/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when password pattern are wrong
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Your email address"]').should('be.visible');
    cy.get('input[placeholder="Your password"]').should('be.visible');
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });

  it('should display error message when username is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('p').should(($p) => {
      const text = $p.text();

      expect(text).to.match(/Email field is required/);
      expect(text).to.include('Email field is required');
    });
  });

  it('should display error message when password is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button')
      .contains(/^Login$/)
      .click();

    cy.get('p').should(($p) => {
      const text = $p.text();

      expect(text).to.match(/Password field is required/);
      expect(text).to.include('Password field is required');
    });
  });

  it('should display alert when password pattern are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Your email address"]').type('testuser');
 
    // mengisi password yang salah
    cy.get('input[placeholder="Your password"]').type('wrong_password');
 
    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.get('p').should(($p) => {
      const text = $p.text();

      expect(text).to.match(/Password must be 5 or more character and contain at least one letter and one number/);
      expect(text).to.include('Password must be 5 or more character and contain at least one letter and one number');
    });
  });

  it('should display alert when username and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Your email address"]').type('doduoaj@gmail.com');
 
    // mengisi password yang salah
    cy.get('input[placeholder="Your password"]').type('Tester2403');
 
    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.get('div').should(($div) => {
      const text = $div.text();

      expect(text).to.match(/email or password is wrong/);
      expect(text).to.include('email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Your email address"]').type('doduoaj@gmail.com');
 
    // mengisi password
    cy.get('input[placeholder="Your password"]').type('Doduoaj24');
 
    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();
 
    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('nav').contains(/^Menu$/).should('be.visible');
  });
});
