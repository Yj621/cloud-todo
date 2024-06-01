// // initialRouteName지원
import { Button } from "../components/Button";
import styles from './styles';
import { Text, View, Pressable } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Main = () => {
  const navigate = useNavigator();
  return (
    <View style={{ top: 30 }}>
      <Text style={styles.text}> Main </Text>
      <Button title="Board로 가기" onPress={() => navigate("board")} />
    </View>
  );
};

const Board = () => {
  const navigate = useNavigator();

  return (
    <View style={{ top: 30 }}>
      <Text style={styles.text}> Board</Text>
      <Button title="About 가기" onPress={() => navigate("about")} />
    </View>
  );
};

const About = () => {
  const navigate = useNavigator();

  return (
    <View style={{ top: 30 }}>
      <Text style={styles.text}> About </Text>
      <Button title="Main으로 가기" onPress={() => navigate("main")} />
    </View>
  );
};


const Ctx = createContext(null);

const IconButton = ({ title, onPress, icon = "cog", size = 30, color = "blue", }) => {
  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons name={icon} size={size} color={color} />
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};
const createNavigator = () => {

  const Navigator = ({ children, initialRouteName }) => {

    const [page, setPage] = useState("");

    useEffect(() => {
      setPage(initialRouteName === "" ? children[0].props.name : initialRouteName)
    }, [])

    return <Ctx.Provider value={{ setPage }}>
      <View style={{ top: 30 }}>
        <View style={{ flexDirection: 'row' }}>
            //2.


        </View>
        <View>{children.filter((child) => child.props.name == page)}</View>
      </View>
    </Ctx.Provider>
  }

  const Screen = ({ component }) => component();  // Main -> <Main />

  return { Navigator, Screen }
}

const Tab = createNavigator();

//custom hook
const useNavigator = () => {
  const { setPage } = useContext(Ctx)
  return setPage
}

// ICON 추가 옵션
export default function Navi08() {

  return (
    <Tab.Navigator initialRouteName="board">
      //2.




    </Tab.Navigator>
  );
}
