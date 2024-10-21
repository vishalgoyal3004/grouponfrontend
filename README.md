# Wikipedia Search Results

This is a simple app to query the articles from wikepedia API. This project call the backend which is developed using node.js express server which in turns call the public wikipedia API and responds with the basic info.

## Available Scripts

In the project directory to install the libraries, you can run:

### `npm install`

Then to run the project, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Project Tech and Project folder structure

- Components folder: consists of some reusable components . (Card, Virtualized List, ReusableCard, ReusableAutocomplete)
- Pages folder: consists of single file which renders the reusable components and returns teh results.
- Styles folder: Contains the color codes.
- Material UI Theme provider is being used to provide consistent UI across the application, which can be transformed based on requirement and to restrict hardcoded styles in actual compnents.
- React with Material UI is used, because MUI provided better UI components removing the need to writting boiler plate code.
- App is wrapped in Theme context provider(for styling) and BrowserRouter(for Routing)
- Eslint and prettier is used for defining the rules for linting errors and code beatufiying.
- Roboto fonts are loaded from google API and is placed in index.html file.
- Vitualised List is used for performance and feedback (loading state is shown) when fetching data.
