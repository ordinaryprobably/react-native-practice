import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <DeleteBtn>
        <FontAwesome name="trash-o" size={30} color="white" />
      </DeleteBtn>
    </TouchableWithoutFeedback>
  );
}

const DeleteBtn = styled.View`
  background-color: ${colors.danger};
  width: 70px;
  align-items: center;
  justify-content: center;
`;
