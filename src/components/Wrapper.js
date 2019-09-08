import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

class Wrapper extends Component {
    render() {
        return (
            <ScrollView style={styles.wrapper}>
                {this.props.children}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#18142E',
    },
})

export default Wrapper;
