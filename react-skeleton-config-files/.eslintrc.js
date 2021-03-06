module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "plugins": [
    "react"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "extends": ["eslint:recommended", "airbnb"]
};