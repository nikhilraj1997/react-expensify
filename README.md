# Expensify

Expense keeping app as taught on [The Complete React Developer Course by Andrew Mead on Udemy](https://www.udemy.com/course/react-2nd-edition/)

> __Note__: This entire repository has been updated because of multiple security issues in Webpack 3 that was bein used earlier
> Other packages have also been updated to their latest versions.
> For choosing dates `react-dates` package is being used which is an outdated one due to it's use of `moment.js` and other old APIs from React itself. These have not been changed as I simply do not wasnt to invest time in making everything work in such an old project.

## Features

1. Add, edit and delete an expense
2. Search expense by partial terms
3. Filter expenses based on dates and amount
4. Authentication with Firebase
5. Includes Jest tests with Enzyme

## To run

1. `npm install`
2. `npm start` 
3. Go to `http://localhost:8080` in your browser

This uses `webpack-dev-server` to run a local instance.

# Requirements

Requires a `.env`, `.env.development` and `.env.test` files for production, development and test respectively. `.env.example` shows all the parameters required in all environment files