import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const imageUris = values[name];

  const addImageUri = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const removeImageUri = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onRemoveImage={removeImageUri}
        onAddImage={addImageUri}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
