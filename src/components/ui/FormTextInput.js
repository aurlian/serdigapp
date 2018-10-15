import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const formTextInput = props => (
  <View style={styles.container}>
    <View>
      <Icon name={props.icon} size={25} color="#e5741d" />
    </View>
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[
        styles.input,
        props.style,
        !props.valid && props.touched ? styles.invalid : null
      ]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 10
  },
  invalid: {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});

export default formTextInput;
