import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Button } from 'native-base'
import { GetPlatos } from './data/store'
import ScrollViewPlatos from './ScrollViewPlatos'

let platos = {}

class Contenedor extends Component{

    constructor(props){
        super(props)

        this.state = {
            platos: {}
        }
    }

    componentWillMount(){
        this.traerPlatos()
    }

    traerPlatos(){
        return fetch('https://platos-b748c.firebaseio.com/platos.json').then((resp) =>{
                    return resp.json()
                }).then( respJson => {
                    this.setState({ platos: respJson, ready: true }) 
                })
    }

    render(){

        return(
            <View style={{flex:1}}>
                <ScrollViewPlatos {...this.state}/>
            </View>
        )
    }
}

export default Contenedor