import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export default function Icon({
  name,
  size = 40,
  bgColor = "grey",
  color = "white",
}) {
  return (
    <IconView size={size} bgColor={bgColor}>
      <Feather name={name} size={30} color={color} />
    </IconView>
  );
}

const IconView = styled.View`
  border-radius: ${(props) => props.size / 2}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.bgColor};
  align-items: center;
  justify-content: center;
`;
