import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";

const button = props => {
  const content = (
    <View
      style={[
        styles.button,
        { backgroundColor: props.color },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text style={{ color: "#fff" }}>{props.children}</Text>
    </View>
  );
  if (props.disabled) {
    return content;
  }
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onButtonPress}>
        {content}
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.onButtonPress}>
        {content}
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: "black"
  },
  disabled: {
    backgroundColor: "#eee",
    borderColor: "#aaa"
  }
});

export default button;
