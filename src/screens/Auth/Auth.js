import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { Avatar } from "react-native-elements";

import FormTextInput from "../../components/ui/FormTextInput";
import sunsetImage from "../../assets/sunset.jpg";
import Button from "../../components/ui/Button";

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground source={sunsetImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={{ marginBottom: 10 }}>
            <Avatar
              xlarge
              rounded
              icon={{ name: "heart", type: "font-awesome" }}
              onPress={() => console.log("Works!")}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={[styles.switchText, styles.fadedText]}>Login</Text>
            <Text style={[styles.switchText]}>Register</Text>
          </View>

          <View style={styles.switchBlobContainer}>
            <View style={[styles.circle, styles.hidden]} />
            <View style={styles.circle} />
          </View>

          <View style={styles.formContainer}>
            <FormTextInput icon="email-outline" placeholder={"Email"} />
            <FormTextInput
              icon="lock-outline"
              placeholder={"Password"}
              secureTextEntry
            />
            <FormTextInput
              icon="lock-outline"
              placeholder={"Confirm Password"}
              secureTextEntry
            />
            <Button color="#1c7e96" onButtonPress={() => alert("dd")}>
              SIGN UP
            </Button>
          </View>

          <View />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  switchContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15
  },
  switchText: {
    fontFamily: "notoserif",
    fontSize: 20,
    color: "#fff"
  },
  switchBlobContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 0
  },
  circle: {
    width: 50,
    height: 25,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: "white"
  },
  hidden: {
    width: 0,
    height: 0
  },
  fadedText: {
    opacity: 0.7
  },
  formContainer: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

// const mapStateToProps = state => {
//   return {};
// };

// const mapDispatchToProps = dispatch => {
//   return {};
// };

export default connect(
  null,
  null
)(AuthScreen);
