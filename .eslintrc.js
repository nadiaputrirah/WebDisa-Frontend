module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@netlify/eslint-config-node",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-key": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/display-name": "off",
    "no-unused-vars": "off",
    "react/no-unknown-property": "off",
    "no-undef": "off",
    "react/prop-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
