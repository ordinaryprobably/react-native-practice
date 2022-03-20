import styled from "styled-components/native";
import { BasicText } from "../styled_components/elements/Text";

import colors from "../config/colors";
import Icon from "./Icon";

export default function MenuButtonWithIcon({ title, color, icon }) {
  return (
    <MenuView>
      <Icon name={icon} size={40} bgColor={color} />
      <Title>{title}</Title>
    </MenuView>
  );
}

const MenuView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  background-color: ${colors.white};
`;

const Title = styled(BasicText)`
  font-weight: 700;
  margin-left: 20px;
`;
