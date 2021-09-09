import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "./components/MyButton";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Props</Text>
      <MyButton title="Button" onPress={() => alert("props")} />
      <MyButton title="Button" onPress={() => alert("children")}>
        Children Props
      </MyButton>
      <MyButton title="Button" onPress={() => alert("default")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default App;
