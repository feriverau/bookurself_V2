import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8100', // URL de tu servidor local
    specPattern: 'cypress/e2e/**/*.{js.jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implementa event listeners aquí si es necesario
    },
  },
});
