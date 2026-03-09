import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',

    setupNodeEvents(on, config) {
      on('task', {
        'db:seed'() {
          console.log('Reset database');
          return null;
        },
      });
    },
  },
});
