# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Drawing path with Scroll

Se dibujó un path mientas se hace scroll

1. Añadir en el `App.js` el svg a utilizar
2. Debajo de nuestra función `App()` anadir las siguientes líneas de código:
` var path = document.querySelector('id/clase-de-tu-svg');`
` var pathLength = path.getTotalLength();`
` console.log(pathLength);`
` path.style.strokeDasharray = pathLength + ' ' + pathLength;`
` path.style.strokeDashoffset = pathLength;`
` path.getBoundingClientRect();`
` window.addEventListener("scroll", function(e) {`
` var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);`
` var drawLength = pathLength * scrollPercentage;`
` path.style.strokeDashoffset = pathLength - drawLength;`

`if (scrollPercentage >= 0.99) {`
`    path.style.strokeDasharray = "none";`
`  } else {`
`    path.style.strokeDasharray = pathLength + ' ' + pathLength;`
`  }`
`});`

# Bugs
En caso de encontrarse con el error de `Cannot read property 'getTotalLength' of null` , añadir la siguiente línea de código para que se ejecute antes del DOM.
`window.onload = function() {`
`  ....code`
`}`
