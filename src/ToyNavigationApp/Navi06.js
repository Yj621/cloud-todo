// Navigator, Screen을 Tab으로 묶음
import { Button } from "../components/Button";
import styles from './styles';
import { Text, View } from "react-native";
import { createContext, useContext, useState } from "react";

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
  const Navigator = ({ children }) => {
    const [page, setPage] = useState("")
    if (page == "") setPage(children[0].props.name)
    return <Ctx.Provider value={{ setPage }}>

    </Ctx.Provider>
  }
  const Screen = ({ component }) => component(); // Main -> <Main />
  return { Navigator, Screen }
}
const Tab = createNavigator();


//custom hook
const useNavigator = () => {
  const { setPage } = useContext(Ctx)
  return setPage
}

export default function Navi06() {
  return<Tab.Navigator>
  <Tab.Screen name="main" component={Main}/>
  <Tab.Screen name="board" component={Board}/>
  <Tab.Screen name="about" component={About}/>
  </Tab.Navigator>
  }
