import React, { useRef, useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  const scrollToEnd = () => {
    scrollView.current.scrollToEnd();
  };

  return (
    <View>
      <ScrollView horizontal ref={scrollView} onContentSizeChange={scrollToEnd}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput
              imageUri={uri}
              key={uri}
              onChangeImage={onRemoveImage}
            />
          ))}
          <ImageInput onChangeImage={onAddImage} />
        </View>
      </ScrollView>
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
