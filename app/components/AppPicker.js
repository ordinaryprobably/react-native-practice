import styled from "styled-components/native";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import { BasicText } from "../styled_components/elements/Text";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <TextView>
      <CategoryIcon name={icon} size={24} color={colors.medium} />
      <PickerText>{placeholder}</PickerText>
      <Feather name="chevron-down" size={24} color={colors.medium} />
    </TextView>
  );
}

const TextView = styled.View`
  flex-direction: row;
  padding: 15px;
  background-color: ${colors.light};
  border-radius: 25px;
  margin: 10px 0;
`;

const PickerText = styled(BasicText)`
  color: ${colors.medium};
  flex: 1;
`;

const CategoryIcon = styled(MaterialCommunityIcons)`
  margin-right: 10px;
`;
