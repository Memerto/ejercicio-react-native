import React, {Component} from 'react'
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native'

class ScrollViewPlatos extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let val = this.props.platos
        return (
            <ScrollView>
                {(this.props.ready)
                    ? val.map(data => <View key={data.nombre} style={styles.dishContainer}><Image
                        source={{
                        uri: data.url
                    }}
                        style={styles.imageContainer}/>
                        <Text style={styles.dishText}>{data.nombre}</Text>
                    </View>)
                    : <View>
                        <Text>Cargando...</Text>
                    </View>}
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    dishContainer: {},
    dishText: {
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    imageContainer: {
        height: 50
    }
})

export default ScrollViewPlatos