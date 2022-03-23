import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput imageUri={uri} key={uri} onChangeImage={onRemoveImage} />
      ))}
      <ImageInput onChangeImage={onAddImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});

export default ImageInputList;
