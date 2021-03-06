import styled from "styled-components/native";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, width, ...otherProps }) {
  return (
    <TextView width={width}>
      {icon && <Feather name={icon} size={24} color={colors.medium} />}
      <StyledTextInput clearButtonMode="always" {...otherProps} />
    </TextView>
  );
}

const TextView = styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: ${colors.light};
  border-radius: 8px;
  margin: 10px 0;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
`;

const StyledTextInput = styled.TextInput`
  width: 90%;
  margin-left: 15px;
  color: ${colors.dark};
  font-size: 18px;
  font-family: ${defaultStyles.fontFamily};
`;
