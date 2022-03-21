import { useFormikContext } from "formik";
import React from "react";
import StyleButton from "../Button";

function SubmitButton({ text }) {
  const { handleSubmit } = useFormikContext();
  return <StyleButton text={text} onPress={handleSubmit} />;
}

export default SubmitButton;
