import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import { WideBtn } from "../styled_components/elements/Button";

export default function StyleButton({ color, text, onPress }) {
  return (
    <WideBtn color={color} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </WideBtn>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
  },
});
