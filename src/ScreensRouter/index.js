import React from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';

import GamesScreen from '../components/screens/GamesScreen';
import StreamsScreen from '../components/screens/StreamsScreen';
import StreamScreen from '../components/screens/StreamScreen';
import Header from '../components/Header';

const MainNavigator = createStackNavigator(
    {
        Games: { screen: GamesScreen },
        Streams: {
            screen: StreamsScreen,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
            }),
        },
        Stream: { screen: StreamScreen },

    },
    {
        initialRouteName: 'Games',
        defaultNavigationOptions: ({ navigation }) => ({
            header: <Header navigation={navigation} />,
        })
    }
);

export default MainNavigator;
