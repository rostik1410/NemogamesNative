import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Wrapper from '../Wrapper';
import ItemCard from '../ItemCard';
import { getStreams } from '../../actions/StreamsActions';

class StreamsScreen extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.dispatch(getStreams({ game_id: this.props.navigation.state.params.data }));
    }

    render() {
        const { streams, error, navigation } = this.props

        return (
            <Wrapper>
                {!error && streams && streams.map(stream =>
                    <ItemCard
                        key={stream.id}
                        name={stream.title}
                        image={stream.thumbnail_url}
                        data={stream.user_name}
                        nextScreen="Stream"
                        navigation={navigation}
                    />
                )}
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const { streams, error } = state.streams;
    return {
        streams,
        error,
    }
}

export default connect(mapStateToProps)(StreamsScreen)
