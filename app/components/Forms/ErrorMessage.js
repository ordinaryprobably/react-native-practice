import React from "react";
import styled from "styled-components/native";
import { BasicText } from "../../styled_components/elements/Text";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <ErrorText>{error}</ErrorText>;
}

const ErrorText = styled(BasicText)`
  color: red;
  font-size: 15px;
`;

export default ErrorMessage;
