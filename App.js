import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet} from 'react-native'


import Main from './src/ToyNavigationApp/Main';

export default function App() {
  return <View style={{top: 30, flex: 1}}>
    <StatusBar style="auto" />
    <Main />    
    </View>  
}