import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { HeaderContainer } from './header.js'
import Contenedor from './contenedor'
import Footer from './footer'

class Index extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderContainer/>
                <Contenedor />
                <Footer />
            </View>
        )
    }
}

export default Index