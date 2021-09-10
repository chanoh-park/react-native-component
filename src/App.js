import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Counter from "./components/Counter";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";
import MyButton from "./components/MyButton";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Props</Text>
      <MyButton title="Button" onPress={() => alert("props")} />
      <MyButton title="Button" onPress={() => alert("children")}>
        Children Props
      </MyButton>
      <MyButton title="Button" onPress={() => alert("default")} /> */}
      {/* <Counter /> */}
      <EventButton />
      <EventInput />
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
