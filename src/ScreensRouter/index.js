import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Router extends Component {

    render() {
        const MainNavigator = createStackNavigator({
            Games: { screen: GamesScreen },
            Streams: { screen: StreamsScreen },
            Stream: { screen: StreamScreen },
        });

        return createAppContainer(MainNavigator);
    }
}

export default (Router)
