const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  screenshots: false,
  env: {
    apiUrl: 'https://mysterious-thicket-31854.herokuapp.com',
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/cypress-report.xml',
    toConsole: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl:
      'https://www.todobackend.com/client/index.html?https://mysterious-thicket-31854.herokuapp.com/',
  },
})
