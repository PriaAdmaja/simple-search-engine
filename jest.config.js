/** @type {import('jest').Config} */
export default {
    verbose: true,
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js'],
    testMatch: ['**/src/utils/__test__/**/*.test.js'],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
};