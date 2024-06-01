import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet} from 'react-native'


//Minimal exmaple of tab-based navigation
import AppNavigation01 from "./src/AppNavigation01";

//버튼 아이콘 설정
import AppNavigation02 from "./src/AppNavigation02";

//props 지옥
import AppNavigation03 from "./src/AppNavigation03";

//props 지옥
import Navi00 from './src/ToyNavigationApp/Navi00';

//context 사용
import Navi01 from './src/ToyNavigationApp/Navi01';

//Navigator 컴포넌트
import Navi02 from './src/ToyNavigationApp/Navi02';

//Navigator 컴포넌트 with Tab bar
import Navi03 from './src/ToyNavigationApp/Navi03';

//Screen component구현
import Navi04 from './src/ToyNavigationApp/Navi04';

//Custom Hook 구현
import Navi05 from './src/ToyNavigationApp/Navi05';

//createNavigator() 구현, Tab과 Navigator를 연관시킴
import Navi06 from './src/ToyNavigationApp/Navi06';

// initialRouteName지원
//import Navi07 from './src/ToyNavigationApp/Navi07';

// ICON 추가 옵션
import Navi08 from './src/ToyNavigationApp/Navi08';

export default function App() {
  return <View style={{top: 30, flex: 1}}>
    <StatusBar style="auto" />
    <Navi03 />    
    </View>  
}