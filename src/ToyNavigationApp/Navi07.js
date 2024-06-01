// // initialRouteName지원
import { Button } from "../components/Button";
import styles from './styles';
import { Text, View } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";

const Main = () => {
  const navigate = useNavigator();
  return (
    <View>
      <Text style={styles.text}> Main </Text>
      <Button title="Board로 가기" onPress={() => navigate("board")} />
    </View>
  );
};

const Board = () => {
  const navigate = useNavigator();

  return (
    <>
      <Text style={styles.text}> Board</Text>
      <Button title="About 가기" onPress={() => navigate("about")} />
    </>
  );
};

const About = () => {
  const navigate = useNavigator();

  return (
    <View>
      <Text style={styles.text}> About </Text>
      <Button title="Main으로 가기" onPress={() => navigate("main")} />
    </View>
  );
};


const Ctx = createContext(null);

const createNavigator = () => {
  const Navigator = ({ children, initialRouteName }) => {
    const [page, setPage] = useState("");
    useEffect(() => {
      setPage(initialRouteName === "" ? children[0].props.name :
        initialRouteName)
    }, [])
    return <Ctx.Provider value={{ setPage }}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          {children.map(child =>
            <Button key={child.props.name} title={child.props.name} onPress={() => setPage(child.props.name)} />)
          }
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

// initialRouteName지원
export default function Navi07() {


  return (
    <Tab.Navigator initialRouteName="board">
      <Tab.Screen name="main" component={Main} />
    </Tab.Navigator>
  );
}
