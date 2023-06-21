module.exports = {
    // A list of paths to directories that Jest should use to search for tests
    roots: ['<rootDir>/src'],

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The file patterns Jest should look for to discover test files
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',

    // Module file extensions to include when searching for tests
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],

    // Transform files before running tests
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};