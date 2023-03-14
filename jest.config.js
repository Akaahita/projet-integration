module.exports = {
  moduleNameMapper: {
    '~store/(.*)': '<rootDir>/apps/app/src/app/~store/$1',
    '~shared/(.*)': '<rootDir>/apps/app/src/app/~shared/$1',
    '~utils/(.*)': '<rootDir>/apps/app/src/app/~shared/utils/$1',
    '~environments/(.*)': '<rootDir>/apps/app/src/environments/$1'
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};
