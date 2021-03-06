// This is official default configuration, at before
// use it, you should install dependencies of its.
//
// Dependencies install command:
//  npm install --save-dev eslint
module.exports = {
  parserOptions: {
    ecmaVersion: new Date().getFullYear(),
    sourceType: "script",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
  },
  parser: "esprima",
  processor: undefined,
  env: (function () {
    var envs = {};
    [
      "browser",
      "node",
      "commonjs",
      "shared-node-browser",
      "es6",
      "es2017",
      "es2020",
      "es2021",
      "worker",
      "amd",
      "mocha",
      "jasmine",
      "jest",
      "phantomjs",
      "protractor",
      "qunit",
      "jquery",
      "prototypejs",
      "shelljs",
      "meteor",
      "mongo",
      "applescript",
      "nashorn",
      "serviceworker",
      "atomtest",
      "embertest",
      "webextensions",
      "greasemonkey",
    ].forEach(function (value) {
      envs[value] = !value;
    });
    return envs;
  })(),
  globals: {},
  plugins: [],
  rules: {
    "semi": [
      "error",
      "always",
    ],
    "indent": [
      "error",
      2,
    ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true,
      },
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline",
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0,
      },
    ],
  },
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  settings: {},
  root: true,
  extends: [
    "eslint:recommended",
  ],
  ignorePatterns: [
    "dist",
    "node_modules",
    "public",
  ],
  overrides: [],
};

// Modify default configuration to enable browser, node and newest
// ECMAScript develop environment and change parser options source
// type to module.
(function () {
  this.parserOptions.sourceType = "module";
  this.parserOptions.ecmaFeatures.impliedStrict = true;

  this.env.browser = true;
  this.env.node = true;
  this.env.es6 = true;
  this.env["es" + new Date().getFullYear()] = true;
}).call(module.exports);

// TypeScript support.
//
// Dependencies install command(basic on ESLint):
//  npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
module.exports.overrides.push({
  files: [
    "*.ts",
    "*.tsx",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/member-ordering": [
      "error",
    ],
    "@typescript-eslint/no-inferrable-types": [
      "off",
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true,
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true,
        },
      },
    ],
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
});

// Vue support.
//
// Dependencies install command(basic on ESLint):
//  npm install --save-dev eslint-plugin-vue
module.exports.overrides.push({
  files: [
    "*.vue",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  parser: "vue-eslint-parser",
  rules: {
    "indent": [
      "off",
    ],
    "vue/script-indent": [
      "error",
      2,
    ],
    "vue/html-comment-indent": [
      "error",
      2,
    ],
  },
  extends: [
    "plugin:vue/essential",
  ],
});
