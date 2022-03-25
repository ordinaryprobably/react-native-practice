import { View, Modal, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

import colors from "../config/colors";

function UploadScreen({ progress = 0, isVisible = false }) {
  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadScreen;
