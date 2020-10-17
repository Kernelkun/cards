const path = require('path')

module.exports = {
  babel: {
    plugins: ['@babel/plugin-proposal-export-default-from']
  },
  webpack: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      components: path.resolve(__dirname, 'src/components/'),
      contexts: path.resolve(__dirname, 'src/contexts/'),
      img: path.resolve(__dirname, 'src/img/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      services: path.resolve(__dirname, 'src/services/'),
      src: path.resolve(__dirname, 'src/'),
      store: path.resolve(__dirname, 'src/store/'),
      support: path.resolve(__dirname, 'src/support/'),
      utils: path.resolve(__dirname, 'src/utils/')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^actions(.*)$': '<rootDir>/src/actions/',
        '^constants(.*)$': '<rootDir>/src/constants/',
        '^components(.*)$': '<rootDir>/src/components/',
        '^contexts(.*)$': '<rootDir>/src/contexts/',
        '^img(.*)$': '<rootDir>/src/img/',
        '^pages(.*)$': '<rootDir>/src/pages/',
        '^reducers(.*)$': '<rootDir>/src/reducers/',
        '^services(.*)$': '<rootDir>/src/services/',
        '^store(.*)$': '<rootDir>/src/store/',
        '^support(.*)$': '<rootDir>/src/support/',
        '^utils(.*)$': '<rootDir>/src/utils/'
      }
    }
  }
}
