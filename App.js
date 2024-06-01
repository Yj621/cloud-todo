import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet} from 'react-native'


import Navi03 from './src/ToyNavigationApp/Navi03';

export default function App() {
  return <View style={{top: 30, flex: 1}}>
    <StatusBar style="auto" />
    <Navi03 />    
    </View>  
}