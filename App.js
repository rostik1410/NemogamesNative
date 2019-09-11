/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './src/reducers';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './src/ScreensRouter';

window.axios = require('axios');
window.axios.defaults.baseURL = 'https://nemogames.tk/';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Router = createAppContainer(MainNavigator);
const App = () => {
    return (
        <Provider store={store}>
            {/* <Header />
            <Wrapper> */}
            <Router />
            {/* </Wrapper> */}
        </Provider>
    );
};

export default App;
