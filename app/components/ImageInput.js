import React from "react";
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const handlePress = async () => {
    if (!imageUri) {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        });

        if (!result.cancelled) {
          onChangeImage(result.uri);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Delete", "Are you sure you want to delete the photo?", [
        { text: "Yes", onPress: () => onChangeImage(imageUri) },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableHighlight
      style={styles.touchable}
      onPress={handlePress}
      underlayColor="#ddd"
    >
      <View style={styles.container}>
        {imageUri ? (
          <Image style={styles.image} source={{ uri: imageUri }} />
        ) : (
          <MaterialCommunityIcons name="camera" size={40} color="black" />
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default ImageInput;
