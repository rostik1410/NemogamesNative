import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import GamesScreen from '../components/screens/GamesScreen';
import StreamsScreen from '../components/screens/StreamsScreen';
import StreamScreen from '../components/screens/StreamScreen';
import Header from '../components/Header';

const MainNavigator = createStackNavigator(
    {
        Games: { screen: GamesScreen },
        Streams: { screen: StreamsScreen },
        Stream: { screen: StreamScreen },

    },
    {
        initialRouteName: 'Games',
        defaultNavigationOptions: {
            header: <Header/>
        }
    }
);

export default MainNavigator;
