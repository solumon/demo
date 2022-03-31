module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        "airbnb-base",
        "plugin:vue/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
    plugins: [
        "vue",
    ],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", 4],
    },
};
