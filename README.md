<style>
    .store-link {
        color: #161514;
        background: #f1f1f1;
        padding: 8px 32px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600px;
        letter-spacing: 2px;
    }

    .store-link:hover {
        color: #f1f1f1;
        background: #161514;
        text-decoration: none;
    }
</style>

<p align="center">
    <a href="https://royal-clothing.herokuapp.com/" target="_blank">
        <img src="https://raw.githubusercontent.com/alevfalse/crown-clothing/master/client/src/assets/crown.png" alt="crown" />
    </a><br/>
</p>
<h2 align="center">CROWN CLOTHING</h1>
<p align="center">
    An e-commerce app made with Express and React with Firebase and Stripe API integrations.
    <br/>
    <br/>
    <a  class="store-link" href="https://royal-clothing.herokuapp.com/" target="_blank">
        View Store
    </a>
</p>
<br />

--- 

## Quick Start

- run `npm install`
- set `PORT` and `STRIPE_SECRET_KEY` environment variables
- get your firebase config from your firebase project settings
- set the `config` object in the `firebase.config.js` file located in `client/src/firebase`
- start hacking!

--- 

## Available Scripts

In the project directory, you can run:

### `npm run client`

Starts the client app for development.

### `npm run server`

Starts the server app for development.

### `npm run dev`

Concurrently starts the server and client apps for development.

### `npm run build`

Builds the client app for deployment to the `client/build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

Starts the app in production mode.<br />

---

## Other Dependencies

Axios, Redux Core/React/Saga/Persist/Logger, Reselect, & Styled Components
