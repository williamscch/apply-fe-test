const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^next/image$": "<rootDir>/__mocks__/next/image.js",
    "^next/link$": "<rootDir>/__mocks__/next/link.js",
    "^next/navigation$": "<rootDir>/__mocks__/next/navigation.js",
    "^next/dynamic$": "<rootDir>/__mocks__/next/dynamic.js",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/contexts/(.*)$": "<rootDir>/src/contexts/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  rootDir: ".",
};

module.exports = createJestConfig(customJestConfig);
