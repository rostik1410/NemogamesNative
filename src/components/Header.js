import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationAction } from 'react-navigation';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {}

    render() {
        return <View style={styles.header}>
            <TouchableOpacity style={styles.logo} onPress={() => this.props.navigation.navigate('Games')}>
                <Text style={styles.logoText}>NemoGames</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: '#2C2444',
        alignItems: 'center',
    },
    logo: {
        height: 70,
        width: '60%',
        backgroundColor: '#33294E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: 'white',
        fontSize: 20,
    }
})


export default Header;
