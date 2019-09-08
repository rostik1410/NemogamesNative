import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';

class StreamsScreen extends Component {
    static propTypes = {}

    render() {
        return (
            <Wrapper>
                <Text> prop </Text>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamsScreen)
