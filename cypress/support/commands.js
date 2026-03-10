Cypress.Commands.add('login', (email, password) => {
  cy.request('POST', '/api/users/login', {
    user: {
      email,
      password,
    },
  }).then((response) => {
    window.localStorage.setItem('jwt', response.body.user.token);
  });
});

Cypress.Commands.add(
  'register',
  (email = 'riot@qa.team', username = 'riot', password = '12345Qwert!') => {
    cy.request('POST', '/api/users', {
      user: {
        email,
        username,
        password,
      },
    });
  },
);
