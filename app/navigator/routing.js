import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'

import { scenes } from './routerScenes'

export const Routing = () =>{
    return(
        <Router scenes={scenes}/>
    )
}
