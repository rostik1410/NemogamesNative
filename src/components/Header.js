import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class Header extends Component {
    static propTypes = {}

    render() {
        return <View style={styles.header} />
    }
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: '#2C2444',
    }
})


export default Header;
