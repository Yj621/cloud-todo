//Context 사용

import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import styles from './styles';
import {createContext, useContext, useState} from 'react'


const Main = () => {
  
  //2.
  return (
    <View>
      <Text style={styles.text}> Main </Text>
      <Button title="Board로 가기" onPress={() => setPage("board")} />
    </View>
  );
};

const Board = () => {
  
  //3. 
  return (
    <>
      <Text style={styles.text}> Board</Text>
      <Button title="About 가기" onPress={() => setPage("about")} />
    </>
  );
};

const About = () => {

  //4. 

  return (
    <View>
      <Text style={styles.text}> About </Text>
      <Button title="Main으로 가기" onPress={() => setPage("main")} />
    </View>
  );
};

//1. Ctx 컨텍스트 생성


export default function Navi01() {

  const [page, setPage] = useState("main")


  return <View>
    //5.






  </View>
}