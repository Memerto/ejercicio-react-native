import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Papasconcarne extends Component{

    render(){
        return(
            <View>
                <Text>
                    Papas con carne
                </Text>
            </View>
        )
    }
}

export default Papasconcarne

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    containerText:{
        textAlign: 'center'

    }
})