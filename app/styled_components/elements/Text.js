import styled from "styled-components/native";
import { Platform } from "react-native";

export const BasicText = styled.Text`
  font-size: 18px;
  font-family: ${Platform.OS === "android" ? "Roboto" : "Avenir"};
`;
