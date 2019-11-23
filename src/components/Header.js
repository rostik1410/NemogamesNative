import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import PropTypes from 'prop-types';

class Header extends Component {
	static propTypes = {
		navigation: PropTypes.object,
	};

	render() {
		const { navigation } = this.props;

		const isMainPage = navigation && navigation.state && navigation.state.routeName === 'Games';

		return (
			<View style={styles.header}>
				{!isMainPage && <HeaderBackButton tintColor="#fff" onPress={() => navigation.goBack()} />}
				<TouchableOpacity style={styles.logo} onPress={() => navigation.navigate('Games')}>
					<Text style={styles.logoText}>NemoGames</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 70,
		backgroundColor: '#2C2444',
		alignItems: 'center',
		flexDirection: 'row',
	},
	logo: {
		height: 70,
		width: '60%',
		position: 'absolute',
		marginHorizontal: '20%',
		backgroundColor: '#33294E',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoText: {
		color: 'white',
		fontSize: 20,
	},
});

export default Header;
