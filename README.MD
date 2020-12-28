# SETUP REACT WITH PURE WEBPACK

- axios
- react
- eslint

```bash

# start development localhost:8080
$ yarn start

# build production dis/ folder

$ yarn build
```

## How to setup ESlint
- install ESLint extension in VSCode

## How to setup axios

```bash
yarn add @babel/plugin-transform-runtime --dev

// .babelrc
{
  ...
  plugins:[
    [
      '@babel/plugin-transform-runtime',
      {
        "regenerator": true,
      }
    ]
  ]
},
```