import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";

import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "serdig.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);

// Start App
export default () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "serdig.AuthScreen",
      title: "Login",
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
};
