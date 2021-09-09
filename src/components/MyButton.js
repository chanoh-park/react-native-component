import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => props.onPress()}
    >
      <Text style={styles.text}>{props.children || props.title}</Text>
    </TouchableOpacity>
  );
};

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
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
