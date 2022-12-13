# TFF-Shop
#This project can be run in the localhost:300 and also in 
#https://tff-shop.herokuapp.com/

#This project is basicly e commerce apllication that teams can create and sell their products to fottball lovers in this web application

# User documentation:
in order to install this project first you need to instal some npm as npm install <package_name>
 which first 'npm i start ' to build our project and for server side 'npm i nodemon'
 to run this project 'npm start command must be type in terminal, for the server side run proejct with 'nodemon index.js'
 for any bug, you can send it to this repository with to me, but currently no bugs found in this application
 
 
 # Developer Documentation
 ## Client Side
 We have a client and server folders which basically client side is front-end and server side is for backend,
 mostly thing are working in master branch but all of them contained from 'erdem' branch 
 The layout of this project is in client folder there are 'public' and 'src' folders, 'public' folder contains the React APP user interface that contains react photos and logos within them.
 in 'src' folder there are 'component','context, 'images','pages' and also App.js and index.js.
 In index.js is the main file that react app working, we use App.js function in index.js to build our client side. For App js file we use this in order to build some routers within this apllication to router our button to go other directories in application.
 In pages folder containts pages that for authentication, users and admin also for all users can acces Home page and Shop within these. With authentication page, we check to route to acces either  admin page or user pages.
 In context we mainly provide a authentication for login which is a usser acces control in so that users can not acces to admin page with tokenization.
 
 ## Server side
 In Server have a index.js file which is most important that contain connection server and backend with mongoDB. Other folders are contollers, models, helper, and routers.
 In routers we have routers that help us to get CRUD operation for both, category,login,register,products containts all get,delete,pull and post functions.
 In helpers we have a functions which connected to routers file that help us to accces this function in database to create, delete or views things that have perform in client side and database.
 In models, we create 3 different models for categories,products and users to connect their attributes with mongoDB, this allow us to create complex system with model documentation.
 In middleware, we create tokens to auhentation to admin and user which they can not acces admin page even if they are try to use server side application such as POSTMAN. This middleware contains requireSigin() function to they need to be first sigin to application.
 In helper we have 'auth.js' which hash password that person entered in the client side so, in database password is not stored as string but they are stored as hash and we compare this hash values when they entered in client side.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
