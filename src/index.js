import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducers/MarsPhotos'
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//Redux variables will only be able to be seen in development mode

const store = createStore(reducer , composeEnhancers(applyMiddleware(thunk)))
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
