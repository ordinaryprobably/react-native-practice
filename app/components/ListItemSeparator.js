import styled from "styled-components/native";
import colors from "../config/colors";

export default function ListItemSeparator() {
  return <Separator />;
}

const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.light};
`;
