//Simple Version

import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import styles from './styles';
import {useState} from 'react'


const Main = ({setPage}) => {
  return <View>
    <Text style={styles.text}> Main</Text>
    <Button title="board로 가기" onPress={()=>setPage("board")}/>
   </View>  
}

const Board = ({setPage}) => {
  return <>
    <Text style={styles.text}> Board</Text>
    <Button title="about으로 가기" onPress={()=>setPage("about")}/>
   </>  
}

const About = ({setPage}) => {
  return <View>
    <Text style={styles.text}> About</Text>
    <Button title="Main으로 가기" onPress={()=>setPage("main")}/>
   </View>  
}


export default function Navi00() {

  const [page, setPage] = useState("main")

  return <View>
  <View>
    //1.

  </View>   
    //2. 
    
  </View>  
}

