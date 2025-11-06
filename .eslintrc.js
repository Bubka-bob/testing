module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true, // <-- Включаем поддержку Jest
  },
  globals: {
    describe: "readonly",
    it: "readonly",
    test: "readonly",
    expect: "readonly",
  },
  extends: ["eslint:recommended"],
};
