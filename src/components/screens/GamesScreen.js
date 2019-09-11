import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getGames } from '../../actions/GamesActions';
import Wrapper from '../Wrapper';
import ItemCard from '../ItemCard';

class GamesScreen extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.dispatch(getGames());
    }

    render() {
        const { games, error, navigation } = this.props;
        return (
            <Wrapper>
                {!error && games && games.map(game =>
                    <ItemCard
                        key={game.id}
                        name={game.name}
                        image={game.box_art_url}
                        data={game.id}
                        nextScreen="Streams"
                        navigation={navigation}
                    />
                )}
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
