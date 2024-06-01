//Navigator 컴포넌트안에서 Tab button 자동 구현

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

//Navigator 컴포넌트안에서 Tab button 자동 구현 - children 속성 이용
const Navigator = ({children}) => {
  const[page,setPage] = useState("main");

  return<Ctx.Provider value={{setPage}}>
    <View>
      <View style={{flexDirection: 'row'}}>
        {
          children.map(child =>
            <Button title={child.props.name}
              onPress={()=>setPage(child.props.name)}/>)
        }
      </View>
    </View>{children.filter((child) => child.props.name == page)}
  </Ctx.Provider>
}

export default function Navi03() {  
  return (    
    <Navigator>
        <Main name="main"/>
        <Board name="board"/>
        <About name="about"/>
    </Navigator>          
  );
}

