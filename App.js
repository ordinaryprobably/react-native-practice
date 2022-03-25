import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import customTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={customTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
