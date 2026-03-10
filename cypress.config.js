const { defineConfig } = require('cypress');
const { execSync } = require('child_process');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4100',

    setupNodeEvents(on, config) {
      on('task', {
        'db:seed'() {
          try {
            execSync(
              'docker compose exec -T db psql -U postgres -d postgres -c "TRUNCATE TABLE users, articles, comments, favorites, follows RESTART IDENTITY CASCADE;"',
            );
            console.log('Database cleared');
          } catch (e) {
            console.log('DB reset fallback');
          }

          return null;
        },
      });
    },
  },
});
