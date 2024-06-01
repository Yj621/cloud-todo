import { useContext, createContext } from "react";
import { View, Text } from "react-native";

const MyContext = createContext(null);

const Component = () => {
    const value = useContext(MyContext)
    return <Text>value={value}</Text>
}
export default function ContextBasic01(){
    return<View>
        <MyContext.Provider value="hello">
            <Component/>
        </MyContext.Provider>
    </View>
}