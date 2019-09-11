import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStream } from '../../actions/StreamsActions';
import Wrapper from '../Wrapper';

class StreamScreen extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.dispatch(getStream(this.props.navigation.state.params.data));
    }

    render() {
        const { stream, error } = this.props;
        console.log('stream', stream)
        return (
            <Wrapper>
                {!error && stream && <WebView style={styles.video} source={{ html: stream }} />}
            </Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
    }
})

const mapStateToProps = (state) => {
    const { stream, error } = state.streams;
    return {
        stream,
        error,
    }
}

export default connect(mapStateToProps)(StreamScreen)
