import {HomeScreen, SettingsScreen} from './components/TabScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

/*
NavigationContainer: 최상위 객체 
Tab.Navigator: 여러 Page를 관리하는 객체, Navigator 컴포넌트는 view를 정의 
Tab.Screen: Screen을 관리하는 객체, Screen은 컴포넌트 
*/
//Minimal exmaple of tab-based navigation
export default function AppNavigation01() {
    return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    );
}