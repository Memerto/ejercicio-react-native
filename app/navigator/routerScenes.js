import React from 'react'
import { Scenes, Actions } from 'react-native-router-flux' 

import Albondigas from '../screens/albondigasconarroz'
import Papas from '../screens/papasconcarne'
import Tallarines from '../screens/tallarinesconsalsa'
import Lasagna from '../screens/lasagna'
import Home from '../contenedor'

export const scenes = Actions.create(
    <Scenes key='root'>
        <Scenes key='home' initial hideNavBar={true} component={Home} ></Scenes>
        <Scenes key='albondigas' component={Albondigas} ></Scenes>
        <Scenes key='papas' component={Papas} ></Scenes>
        <Scenes key='lasagna' component={Lasagna} ></Scenes>
        <Scenes key='tallarines' component={Tallarines} ></Scenes>
    </Scenes>
)