import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const HeaderContainer = () =>{
    return(
        <View style={styles.headerContainer}>
            <Icon name='bars' size={40} color='gray'/>
            <Icon name='home' size={40} color='gray'/>
            <Icon name='rocket' size={40} color='gray'/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        marginTop:30,
        padding:10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black'
    },
})