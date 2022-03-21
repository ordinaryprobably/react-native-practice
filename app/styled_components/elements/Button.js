import styled from "styled-components/native";
import colors from "../../config/colors";

export const WideBtn = styled.TouchableOpacity`
  background-color: ${(props) => {
    switch (props.color) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.secondary;
      default:
        return colors.primary;
    }
  }};
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 15px;
`;
