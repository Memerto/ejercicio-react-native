import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Footer extends Component{
    render(){
        return(
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Footer</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerContainer:{
        backgroundColor: 'gray',
        padding: 20
    },
    footerText:{
        color:'white',
        textAlign:'center'
    }
})

export default Footer