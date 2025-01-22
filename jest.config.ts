export {};
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
  coverageDirectory: "coverage",
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  coverageReporters: ["json-summary", "text", "lcov"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  coveragePathIgnorePatterns: ["\\.stories\\.tsx"],
};
