import styled from "styled-components/native";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { BasicText } from "../styled_components/elements/Text";

export default function Card({ title, subtitle, imageUrl, onPress }) {
  /**
   * imageUrl contains initially configured IP address, which changes everytime a reconnection happens.
   * If images are not showing, try fixing [Backend/config/development.json] and [test1/app/api/client.js]
   * with current IP address.
   */

  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <CardView>
          <CardView.Image source={{ uri: imageUrl }} />
          <CardView.Details>
            <CardView.Title>{title}</CardView.Title>
            <CardView.SubTitle>{subtitle}</CardView.SubTitle>
          </CardView.Details>
        </CardView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

const CardView = styled.View`
  border-radius: 8px;
  background-color: white;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
`;

const DetailView = styled.View`
  padding: 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

const TitleText = styled(BasicText)`
  margin-bottom: 7px;
`;

const SubText = styled(BasicText)`
  color: ${colors.secondary};
  font-weight: bold;
`;

CardView.Image = Image;
CardView.Details = DetailView;
CardView.Title = TitleText;
CardView.SubTitle = SubText;
