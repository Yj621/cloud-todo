import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";

export const Button = ({onPress, title}) => {
  return <Pressable style={styles.btnContainer} onPress={onPress} >
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
}

const styles = StyleSheet.create({
  btnText: {
    color: "#00f",
    fontSize: 30,
    fontWeight: "400",
    margin: 10,
  },
  btnContainer: {
    backgroundColor: "#c1f3f7",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  }
});
