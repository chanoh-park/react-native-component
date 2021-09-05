import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => alert("Click !!!")}
    >
      <Text style={styles.text}>{props.children || props.title}</Text>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: "Button",
};

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "#3498db",
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});

export default MyButton;
