import React from 'react';

import {useFonts} from 'expo-font'
import {Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

import Routes from './src/routes';

export default function App() {

  const [fontsLoad] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if(!fontsLoad)
    return null

  return (
    <Routes />
  );
}
