# Testing basics

[![MIT](https://img.shields.io/github/license/LukaszNowakPL/testing-basics)](https://github.com/LukaszNowakPL/testing-basics/blob/master/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/LukaszNowakPL/testing-basics)](https://github.com/LukaszNowakPL/testing-basics/blob/master/package.json)
[![Build Status](https://travis-ci.org/LukaszNowakPL/testing-basics.svg?branch=master)](https://travis-ci.org/LukaszNowakPL/testing-basics)
[![dependencies Status](https://david-dm.org/LukaszNowakPL/testing-basics/status.svg)](https://david-dm.org/LukaszNowakPL/testing-basics)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/62385da33f378eac4bac/maintainability)](https://codeclimate.com/github/LukaszNowakPL/testing-basics/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/62385da33f378eac4bac/test_coverage)](https://codeclimate.com/github/LukaszNowakPL/testing-basics/test_coverage)

Testing basics is a collection of basic examples of unit and integration tests of a modern React application parts.

This presentation covers:

-   Unit testing of small separated logics
-   Integration test showcase - which integration should be tested and what component should hold the test
-   Bad integration test showcase - overtesting and unnecessary repeating
-   Integration levels - including React router, Formik
-   component / hook / api architecture pattern in context of api testing
-   Adding Nock to include api calls into integration

## Architecture schema

The showcase is a bucket of small working applications. They are separated from each other on `src/views` folder. Each application holds different testing topic. Please refer to `src/views/_Application_Name_/README.md` file to get more context of application's topic. Test files are separated on `test/views` folder as well.

## Techniques

For presentation purposes application:

-   is bootstrapped with `Create React App`.
-   is written in `TypeScript`
-   uses `React hooks`
-   uses `Formik` for form data management
-   uses `React-router` for url management
-   uses `Mirage JS` for simulating backend responses/storing data

For testing purposes application:

-   uses `Jest` and `testing-library`
-   for some examples uses `nock`
-   uses `integration test` term as all tests that renders React component

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test -- --coverage`

Launches the test runner and stores code coverage report on `coverage/` folder. The report is available as an html document under `coverage/lcov-report/index.html` file.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Other used technologies sources:

-   [Jest](https://jestjs.io/docs/en/getting-started.html)
-   [React testing library](https://testing-library.com/docs/react-testing-library/intro)
-   [nock](https://github.com/nock/nock)
-   [React Router](https://reactrouter.com/)
-   [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
-   [React hooks](https://reactjs.org/docs/hooks-intro.html)
-   [Emotion](https://emotion.sh/docs/introduction)
-   [Material-ui](https://material-ui.com/)
-   [Axios](https://github.com/axios/axios)
-   [Formik](https://formik.org/)
-   [Mirage JS](https://miragejs.com/)
