import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import { BasicText } from "../styled_components/elements/Text";
import styled from "styled-components/native";
import ListItem from "../components/ListItem";

export default function ListingDetails({ title, subtitle }) {
  return (
    <View>
      <ItemImage source={require("../assets/jacket.jpg")} />
      <DetailContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </DetailContainer>
      <ListItem
        title="Most"
        description="subtitle"
        imageUrl={require("../assets/mosh.jpg")}
      />
    </View>
  );
}

const DetailContainer = styled.View`
  padding: 20px;
`;

const ItemImage = styled.Image`
  width: 100%;
  height: 300px;
`;

const Title = styled(BasicText)`
  margin-bottom: 20px;
`;

const Subtitle = styled(BasicText)`
  color: ${colors.secondary};
  font-weight: bold;
`;

const ProfileView = styled.View`
  flex-direction: row;
  padding: 0 20px;
`;

const ProfileImage = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

const ProfileInnerView = styled.View`
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
