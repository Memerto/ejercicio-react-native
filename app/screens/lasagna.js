import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Lasagna extends Component{

    render(){
        return(
            <View>
                <Text>
                    Lasagna
                </Text>
            </View>
        )
    }
}

export default Lasagna

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    containerText:{
        textAlign: 'center'

    }
})