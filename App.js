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
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./app/navigation/AuthNavigator";
import customTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetworkNotification from "./app/components/NetworkNotification";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState(null);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  /**
   * Decoding within a component is not recommended.
   * A component must stay simple. All the logics should be
   * delegated to individual modules.
   *
   * /auth/storage.js should export a function decoding user token
   * retrieved from the storage instead of retrieveTokenFromStorage().
   */
  const getUserTokenFromStorage = async () => {
    const token = await authStorage.retrieveTokenFromStorage();

    if (!token) return;

    setUser(jwtDecode(token));
  };

  if (!isAppLoaded) {
    return (
      <AppLoading
        startAsync={getUserTokenFromStorage}
        onFinish={() => setIsAppLoaded(true)}
        onError={(e) => console.log(e)}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NetworkNotification />
      <NavigationContainer theme={customTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
const styles = StyleSheet.create({});
