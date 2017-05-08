import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Albondigasconarroz extends Component{

    render(){
        return(
            <View>
                <Text>
                    Albondigas con Arroz
                </Text>
            </View>
        )
    }
}

export default Albondigasconarroz

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    containerText:{
        textAlign: 'center'

    }
})