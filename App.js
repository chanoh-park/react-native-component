import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "Chano";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {(() => {
          if (name === "Hanbit") return "My name is Hanbit";
          else if (name === "Chano") return "My name is Chano";
          else return "My name is React Native";
        })()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
