module.exports = {
    preset: 'ts-jest',
    type: 'module',
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.ts"
    },
    globals: {
        "ts-jest": {
            isolatedModules: true,
        }
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(@arcgis)/)'],
};