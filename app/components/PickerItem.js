import styled from "styled-components/native";
import { BasicText } from "../styled_components/elements/Text";

export default function PickerItem({ label, onPress }) {
  return (
    <StyledTouchable onPress={onPress}>
      <PickerText>{label}</PickerText>
    </StyledTouchable>
  );
}

const StyledTouchable = styled.TouchableOpacity``;

const PickerText = styled(BasicText)`
  padding: 15px;
`;
