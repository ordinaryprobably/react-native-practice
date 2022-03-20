import { View, StyleSheet, Image, Touchable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <AntDesign name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <FontAwesome name="trash-o" size={30} color="white" />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    width: 30,
    height: 30,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 30,
    left: 30,
  },
  deleteIcon: {
    width: 30,
    height: 30,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
