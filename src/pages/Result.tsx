import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import {useFocusEffect, useRoute} from '@react-navigation/native'

interface Props{
    result: number
}

export default function Result() {

    const route = useRoute()

    const {result: peso} = route.params as Props
    const cups = []

    const quantidadeCops = Math.round(peso/200)

    const quantidadePorPeso = (number: number) => (number).toFixed(2).toString().split('.').join(',')

    for(let i =0; i < quantidadeCops; i++) {
        cups.push(<MaterialCommunityIcons key={i} style={{margin: 4}} name='cup-water' size={30} color='#407bff'/>)
    }



    return (
        <View style={style.container}>
            <Text style={style.textInfo}>Para se manter saudavel durante seu dia deve beber {quantidadePorPeso(peso/1000)} litros de àgua</Text>

            <View style={style.contentCups} >
                <Text style={style.textTitle}>Aproximadamente {quantidadeCops} copos de 200 ml</Text>
                <View style={style.wrapCup}>
                    {cups.map(item => item)}
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textInfo: {
        color: '#1a7d6f',
        backgroundColor: '#30e3ca',
        width: 350,
        height: 55,
        borderRadius: 16,
        padding: 8,
        textAlign: "center",
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Nunito_700Bold',
        elevation: 3,
        marginTop: -20,
    },
    contentCups: {
        height: 175,
        width: 350,
        marginTop: 36,
    },
    textTitle: {
        color: '#407bff',
        fontSize: 16,
        fontFamily: 'Nunito_700Bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    wrapCup: {
        flexWrap: 'wrap',
        flexDirection: 'row',        
    }
})