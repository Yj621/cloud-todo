import { HomeScreen, SettingsScreen, MailScreen, MeetScreen} from "./components/TabScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

export default function AppNavigation03() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Settings">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: (props) => TabIcon({ ...props, name: "home" }),
          }}
        />
        <Tab.Screen name="Mail" component={MailScreen} 
        options={{
          tabBarLabel: "Mail", 
          tabBarIcon: (props) => TabIcon( {...props, name: "email"})
        }}/>
        <Tab.Screen name="Meet" component={MeetScreen} 
        options={{
          tabBarLabel: "Meet",
          tabBarIcon: (props) => TabIcon( {...props, name: "video"})
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options= {{
          tabBarLabel: "Settings",
          tabBarIcon: (props) => TabIcon({...props, name: 'cog'})
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}