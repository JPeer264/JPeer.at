module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "parser": "@typescript-eslint/parser",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "useJSXTextNode": true,
        "project": "./tsconfig.json"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
    }
};
