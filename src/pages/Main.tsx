import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'

import {useNavigation} from '@react-navigation/native'


import imageWater from '../assets/rafiki.png'

export default function Main() {

    const navigation = useNavigation()

    const [peso, setPeso] = useState('')

    function calcValueWater() {
        const pesoUser = Number(peso)

        const result = pesoUser * 35

        Keyboard.dismiss()

        navigation.navigate('Result', {result})

        setPeso('')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Que tal calcular a quantidade de àgua necessario para manter sua saude em dia.</Text>
            <Image source={imageWater}/>

            <View style={styles.inputContent}>
                <Text style={styles.text} >Digite seu peso corporal</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        value={peso}
                        onChangeText={ (text) => setPeso(text)} 
                        style={styles.inputKg} 
                        keyboardType='numeric' />
                    <TouchableOpacity onPress={calcValueWater} style={styles.button}>
                        <Text style={{
                            color: '#FFF', 
                            fontSize: 16,
                            fontFamily: 'Nunito_700Bold'
                        }}>Calcular</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        width: 313,
        color: '#407bff',
        fontSize: 16,
        textAlign: "center",
        textTransform: 'uppercase',
        fontFamily: 'Nunito_800ExtraBold',
    },
    inputContent: {
        backgroundColor: '#407BFF',
        width: 313,
        height: 130,
        borderRadius: 10,
        elevation: 10,
        alignItems: "center"
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 26,
        fontFamily: 'Nunito_700Bold'
    },
    inputBox: {
        width: 288,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: 16,
    },
    inputKg: {
        width: 188,
        height: 50,
        backgroundColor: '#78b2fd',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        padding: 8,
        color: '#FFFF',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#1A4AB5',
        width: 100,
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    }
})