import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getGames } from '../../actions/GamesActions';
import Wrapper from '../Wrapper';
import GameCard from '../GameCard';

class GamesScreen extends Component {
    static propTypes = {}

    componentDidMount() {
        console.log('check')
        this.props.dispatch(getGames());
    }

    render() {
        const { games, navigation } = this.props;
        console.log('this.props', this.props);
        return (
            <Wrapper>
                {games && games.map(game => <GameCard key={game.id} game={game} navigation={navigation}/>)}
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    const { games, error } = state.games;
    return {
        games,
        error
    }
}

export default connect(mapStateToProps)(GamesScreen);
