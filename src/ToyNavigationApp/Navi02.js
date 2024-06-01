//Navigator Component로 구조화 시키기

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


//1. Navigator
const Navigator = ({ children }) => {
  const { page, setPage } = useContext(Ctx);
  if (page == "") setPage(children[0].props.name);
  return <View>
    {children.filter((child) => child.props.name == page)}
  </View>
}



//Navigator Component로 구조화 시키기
export default function Navi02() {
  const [page, setPage] = useState("main");

  return (
    <Ctx.Provider value={{ page, setPage }}>
      <View style={{ flexDirection: "row" }}>
        <Button title="홈" onPress={() => setPage("main")} />
        <Button title="자료실" onPress={() => setPage("board")} />
        <Button title="about" onPress={() => setPage("about")} />
      </View>
      <Navigator>
        <Main name="main" />
        <Board name="board" />
        <About name="about" />
      </Navigator>
    </Ctx.Provider>
  );
}
