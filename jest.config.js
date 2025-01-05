const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  setupFiles: ["<rootDir>/__mocks__/localStorage.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^next/image$": "<rootDir>/__mocks__/next/image.js",
    "^next/link$": "<rootDir>/__mocks__/next/link.js",
    "^next/navigation$": "<rootDir>/__mocks__/next/navigation.js",
    "^next/dynamic$": "<rootDir>/__mocks__/next/dynamic.js",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/context/(.*)$": "<rootDir>/src/context/$1",
    "^@/services/(.*)$": "<rootDir>/src/services/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/config/(.*)$": "<rootDir>/src/config/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  rootDir: ".",
};

module.exports = createJestConfig(customJestConfig);
