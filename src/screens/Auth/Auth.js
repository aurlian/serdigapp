import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthScreen);

export default AuthScreen;
