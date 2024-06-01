import { Text, Button, View } from 'react-native';
import {useState} from 'react'


const Page1 = ({setPage}) => {
  return <View>
    <Text style={{width: 100, height: 500}}> Page</Text>
    <Button title="두번째 페이지로 가기" onPress={()=>setPage("page2")}/>
   </View>  
}

const Page2 = ({setPage}) => {
  return <>
    <Text style={{width: 100, height: 500}}> Page2</Text>
    <Button title="세번째 페이지로 가기" onPress={()=>setPage("page3")}/>
   </>  
}

const Page3 = ({setPage}) => {
  return <View>
    <Text style={{width: 100, height: 500}}> Page3</Text>
    <Button title="첫번째 페이지로 가기" onPress={()=>setPage("page1")}/>
   </View>  
}


// 모듈화 되어 있지 않고 내가 다양한 react 원리를 이해해서 사용해야함
// 재사용할 수 있도록 Component화가 안되어 있음
// props 지옥 발생할 수 있음 (계층구조가 깊어질 때 문제가 생길 수 있음)
export default function App() {

  const [page, setPage] = useState("page1")

  return <View>
    <View style={{flexDirection:"row"}}>
    <Button title="페이지1" onPress={()=>setPage("page1")}/>
    <Button title="페이지2" onPress={()=>setPage("page2")}/>
    <Button title="페이지3" onPress={()=>setPage("page3")}/>    
  </View>   
  
    {page == "page1"  && <Page1 setPage={setPage}/>  }
    {page == "page2"  && <Page2 setPage={setPage}/>  }
    {page == "page3"  && <Page3 setPage={setPage}/>  }    
    
  </View>  
}

