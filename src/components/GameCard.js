import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class GameCard extends Component {
    render() {
        const { game, navigation } = this.props;
        console.log('this.props', this.props);

        return (
            <View style={styles.container} /*{() => navigation.navigate('Streams', { gameId: game.id })}*/>
                <Image style={styles.image} source={{ uri: game.box_art_url }} />
                <Text style={styles.name}>{game.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        marginTop: 10,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 250,
    }
})

export default GameCard;
