import { TouchableHighlight } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import styled from "styled-components/native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

export default function ListItem({
  title,
  description,
  imageUrl,
  IconComponent,
  onPress,
  renderRightAction,
  showChevrons,
  numberOfLines,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <ProfileView>
            {IconComponent}
            {imageUrl && <ProfileImage source={imageUrl} />}
            <ProfileInnerView>
              <ProfileName>{title}</ProfileName>
              {description && (
                <CountListing numberOfLines={numberOfLines}>
                  {description}
                </CountListing>
              )}
            </ProfileInnerView>
            {showChevrons && (
              <Feather name="chevron-right" size={24} color="black" />
            )}
          </ProfileView>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const ProfileView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  background-color: ${colors.white};
`;

const ProfileImage = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

const ProfileInnerView = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 10px;
`;

const ProfileName = styled.Text`
  font-size: 15px;
  margin-bottom: 5px;
`;

const CountListing = styled.Text`
  font-size: 15px;
  color: grey;
`;
