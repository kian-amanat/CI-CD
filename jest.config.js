module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },

  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],  // <-- مهم
};
