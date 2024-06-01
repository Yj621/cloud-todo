import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
};

export const SettingsScreen = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Settings!</Text>
        </View>
      );
}

export const MailScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Mail!</Text>
        </View>    
        )
}

export const MeetScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Meet!</Text>
        </View>    
        )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: {fontSize: 30}
    
})