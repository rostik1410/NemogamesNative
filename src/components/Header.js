import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            fdfsdf
        ); //<Header style={styles.header} />
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2C2444',
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
