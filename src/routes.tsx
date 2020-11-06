import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Main from './pages/Main'
import Result from './pages/Result'

const {Navigator, Screen} = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name='Home' component={Main} />
                
                <Screen 
                    name='Result' 
                    component={Result} 
                    options={{
                        headerShown: true,
                        title: '',
                        headerStyle: {
                            backgroundColor: '#f5f5f5',
                            elevation: 0,
                        }
                    }}/>
            </Navigator>
        </NavigationContainer>
    )
}