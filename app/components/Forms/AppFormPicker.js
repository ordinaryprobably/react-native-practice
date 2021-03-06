import { useFormikContext } from "formik";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

function AppFormPicker({ name, items, placeholder, width }) {
  const { setFieldValue, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onItemSelect={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
