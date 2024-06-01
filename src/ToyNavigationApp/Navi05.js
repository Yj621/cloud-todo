//Custom Hook 구현

import { Text, View } from "react-native";
import { createContext, useContext, useState } from "react";
import { Button } from "../components/Button";
import styles from './styles';

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

  //3. 


  return (
    <>
      <Text style={styles.text}> Board</Text>
      <Button title="About 가기" onPress={() => navigate("about")} />
    </>
  );
};

const About = () => {
  const useNavigator = () => {
    const { setPage } = useContext(Ctx)
    return setPage
  }
  return (
    <View>
      <Text style={styles.text}> About </Text>
      <Button title="Main으로 가기" onPress={() => navigate("main")} />
    </View>
  );
};


const Ctx = createContext(null);

const Navigator = ({ children }) => {

  const [page, setPage] = useState("")
  if (page == "") setPage(children[0].props.name);

  if (page == "") setPage(children[0].props.name)

  return <Ctx.Provider value={{ setPage }}>
    <View>
      <View style={{ flexDirection: 'row' }}>
        {children.map(child =>
          <Button title={child.props.name} onPress={() => setPage(child.props.name)} />)
        }
      </View>
      <View>{children.filter((child) => child.props.name == page)}</View>
    </View>
  </Ctx.Provider>
}

const Screen = ({ component }) => component();  // Main -> <Main />

//custom hook: page 이동에 사용되는 Context 이름과 해당 state를 알 필요없이 customHook으로 일반화 시킬 수 있다.
//1. 



export default function Navi05() {
  return (
    <Navigator>
      <Screen name="main" component={Main} />
      <Screen name="board" component={Board} />
      <Screen name="about" component={About} />
    </Navigator>
  );
}
