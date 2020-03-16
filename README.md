# SAS QUIZ APP

## Get Started

Make sure you have yarn 1.22.1 or above installed. After you have cloned this repository:

#### install the dependencies:
`yarn install`

#### Run the app in development mode:
`yarn start`

It should open [http://localhost:3000](http://localhost:3000) in the browser so you can see a preview of you web app.
The page should reload if you make edits and you may see any lint errors in the console.

## Dependencies

This project uses the following packages and librarys, which can also be found in **package.json** file:

    "@fortawesome/fontawesome-svg-core": "^1.2.27",
    "@fortawesome/free-solid-svg-icons": "^5.12.1",
    "@fortawesome/react-fontawesome": "^0.1.9",
    "@material-ui/core": "^4.9.5",
    "@material-ui/icons": "^4.9.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "acorn": "^7.1.1",
    "axios": "^0.19.2",
    "date-fns": "^2.11.0",
    "firebase": "^7.11.0",
    "react": "^16.13.0",
    "react-dom": "^16.13.0",
    "react-loader-spinner": "^3.1.5",
    "react-redux": "^7.2.0",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.0",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "redux-persist": "^6.0.0",
    "styled-components": "^5.0.1"

## Folders Structure

Project's main folder is `src`, where you will find:

    src/
      index.js
      routes.js
      index.css
      assets/
      components/
      pages/
      services/
      store/
      theme/
      utils/

- **index.js**: main ReactJS file, that renders app with a router and a redux store.
- **routes.js**: file that switches pages depending on the current URL path. In this file you will find AppContent component that holds the application Header.
- **index.css**: body stylization file. Components stylization must be done in a specific style.js file inside its component folder.

You will also find those folders:

- **assets**: for icons, images, fonts, audio files and other useful assets.
- **components**: each component should be in a separete folder with a index.js file and a style.js if necessary.
- **pages**: idem for components, but pages are rendered by a route.
- **services**: functions to communicate with APIs and firebase.
- **store**: with all reducers and a index file that creates a redux store.
- **theme**: holds the globalStyle, where app's theme and a basic label are declared.
- **utils**: for useful functions, that can be used by multiple parts of the application.

Both `components` and `pages` also have a index file that exports the folder contents.
This is useful so that in other files you can import them just like:

    import {
      SidebarMenu,
      AppHeader,
      // ...
    } from './components';

## Branchs Structure

- **master**: this branch contains *production* code. We never work, commit or push anything here.
- **develop**: this branch contains *ready to deploy* code. When the features are finished then they are merged into develop.

Still, we never commit to develop. Instead we must:

1. Create a new branch from `develop`, i.e. `git checkout -b feature/new-stuff`.
2. Work on this branch.
3. Push your branch `git push -u origin feature/new-stuff`
4. Go to bitbucket and create a Pull Request to branch **develop**

Follow this name pattern to help others understand what you are working on:
- feature/name : used to develop new features, pages, components etc.
- bugfix/name : used to fix something that is behaving in a different way that expected.

## More info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
