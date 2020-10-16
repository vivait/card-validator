'use strict';

module.exports = {
  cacheDirectory: '<rootDir>/.cache',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx'
  ],
  testResultsProcessor: 'jest-teamcity-reporter',
  modulePathIgnorePatterns: ["<rootDir>/src/.*/__mocks__"]
};
