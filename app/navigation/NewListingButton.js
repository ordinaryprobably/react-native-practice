import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={30}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    bottom: 20,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;
