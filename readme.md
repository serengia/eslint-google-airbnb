# Eslint, Prettier, with Google, Airbnb and Standard style guides - for NodeJs, React and more

In this configuration, I went through various configuration options. [Please follow the Video](#) to see the different options.

## Configuration options and Plugins used

- **npm eslint** => https://eslint.org/
- **npm @eslint/config --init** => https://eslint.org/

---

- **eslint-config-prettier** => https://github.com/prettier/eslint-config-prettier
- **eslint-plugin-prettier** => https://www.npmjs.com/package/eslint-plugin-prettier

---

- **eslint-config-standard** => https://www.npmjs.com/package/eslint-config-standard

OR

```sh
npm i @eslint/config --init

#Then on popular style guide choose standard
```

---

- **eslint-config-google** => https://www.npmjs.com/package/eslint-config-google

OR

```sh
npm i @eslint/config --init

#Then on popular style guide choose google
```

---

- **eslint-config-airbnb-base** => https://www.npmjs.com/package/eslint-config-airbnb: PLEASE NOTE - This option does NOT include React configuration, hence perfect for backend. <br/>

You can achieve the above by running the following command

```sh
npm i @eslint/config --init

#In this case, make sure you don't choose any framework from the option (ie. instead of choosing React, Angular or vue.js, choose none.)
```

---

- **eslint-config-airbnb** => https://www.npmjs.com/package/eslint-config-airbnb . PLEASE NOTE - This option includes React framework configuration <br/>

You can achieve the above by running the following command

```sh
npm i @eslint/config --init

#Make sure to choose React as your framework of choice to have the right dependencies installed
```

---

- **eslint-config-react-app** => https://www.npmjs.com/package/eslint-config-react-app . PLEASE NOTE: This configuration is automatically reacted when you run npx create-react-app my-app-name <br /><br /><br />

# A). Backend configuration

CD into backend folder and Install Packages as guided

## Sample .eslintrc.json file rules

_Extend/modify the rules to fit your project needs_

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "extends": ["prettier", "airbnb-base", "plugin:node/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest"
  },
  "plugins": ["prettier"],
  "rules": {
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "linebreak-style": ["error", "windows"],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "req|res",
        "varsIgnorePattern": "useEffect"
      }
    ],
    "no-console": "warn",
    "func-names": "off",
    "object-curly-newline": "off"
  }
}
```

---

<br /><br />

# B). Frontend configuration

CD into frontend folder and Install Packages as guided

## Sample .eslintrc.json file rules

_Extend/modify the rules to fit your project needs_

```json
{
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "airbnb/hooks",
    "react-app"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest"
  },
  "plugins": ["react"],
  "rules": {
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "linebreak-style": ["off", "windows"],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "req|res|next",
        "varsIgnorePattern": "useEffect"
      }
    ],
    "no-console": "warn",
    "func-names": "off",
    "object-curly-newline": "off",
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "comma-dangle": ["error", "never"],
    "jsx-a11y/anchor-is-valid": "off",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": false
      }
    ]
  }
}
```

### Reference links

- ESLint Rules - https://eslint.org/
- Airbnb Style Guide - https://www.npmjs.com/package/eslint-config-airbnb/
- Prettier - https://prettier.io/
- Create react app configuration - https://create-react-app.dev/docs/setting-up-your-editor

- Configure ESLint from Vs Code - https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
