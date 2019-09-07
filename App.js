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
import Wrapper from './src/components/Wrapper';
import Header from './src/components/Header';
import Router from './src/ScreensRouter';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            {/* <Header /> */}
            <Wrapper>
                <Router />
            </Wrapper>
        </Provider>
    );
};

export default App;
