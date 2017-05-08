import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Tallarinesconsalsa extends Component{

    render(){
        return(
            <View>
                <Text>
                    Tallarines con salsa
                </Text>
            </View>
        )
    }
}

export default Tallarinesconsalsa

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    containerText:{
        textAlign: 'center'

    }
})