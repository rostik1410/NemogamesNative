import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

class Wrapper extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView style={styles.wrapper}>

                </ScrollView>
            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#18142E',
    },
})

export default Wrapper
