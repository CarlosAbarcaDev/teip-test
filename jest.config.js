// module.exports = {
//     moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
//     testEnvironment: 'node',
//     transform: {
//       '^.+\\.ts$': 'ts-jest',
//       '^.+\\.js$': 'babel-jest',
//       '^.+\\.vue$': 'vue-jest',
//     },
//     transformIgnorePatterns: ['<rootDir>/node_modules/']
//   }
  
module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};