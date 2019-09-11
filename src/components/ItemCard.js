import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

class ItemCard extends Component {
    render() {
        const { name, image, data, nextScreen, navigation } = this.props;

        return (
            <TouchableOpacity onPress={() => navigation.navigate(nextScreen, {data: data})}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <Text style={styles.name}>{name}</Text>
                </View>
            </TouchableOpacity>
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

export default ItemCard;
