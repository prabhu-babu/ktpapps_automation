module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "import", "prettier"],
  extends: ["airbnb-typescript/base", "prettier", "plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "@typescript-eslint/no-explicit-any": ["off"],
  },
};
