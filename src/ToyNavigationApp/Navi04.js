//Screen Component 구현

import { Text, View } from "react-native";
import { createContext, useContext, useState } from "react";
import { Button } from "../components/Button";
import styles from './styles';

const Main = () => {
  const { setPage } = useContext(Ctx);

  return (
    <View>
      <Text style={styles.text}> Main </Text>
      <Button title="Board로 가기" onPress={() => setPage("board")} />
    </View>
  );
};

const Board = () => {
  const { setPage } = useContext(Ctx);

  return (
    <>
      <Text style={styles.text}> Board</Text>
      <Button title="About 가기" onPress={() => setPage("about")} />
    </>
  );
};

const About = () => {
  const { setPage } = useContext(Ctx);

  return (
    <View>
      <Text style={styles.text}> About </Text>
      <Button title="Main으로 가기" onPress={() => setPage("main")} />
    </View>
  );
};


const Ctx = createContext(null);

const Navigator = ({ children }) => {

  const [page, setPage] = useState("");
  if (page == "") setPage(children[0].props.name);

  return <Ctx.Provider value={{ setPage }}>
    <View>
      <View style={{ flexDirection: 'row' }}>
        {
          children.map(child =>
            <Button title={child.props.name}
              onPress={() => setPage(child.props.name)} />)
        }
      </View>
      <View>{children.filter((child) => child.props.name == page)}</View>
    </View>
  </Ctx.Provider>
}

//component를 Component 화시킴
const Screen2 = ({ component }) => {
  const C = component
  return <C />
}

//1. Screen Component  // Main -> <Main />



export default function Navi04() {
  return (
    <Navigator>
      <Screen name="main" component={Main} />
      <Screen name="board" component={Board} />
      <Screen name="about" component={About} />
    </Navigator>
  );
}

