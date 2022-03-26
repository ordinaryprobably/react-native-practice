import { View, Text, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import colors from "../config/colors";

function NetworkNotification(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Network Connection</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    top: Constants.statusBarHeight,
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
  },
});

export default NetworkNotification;
