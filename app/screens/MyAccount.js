import styled from "styled-components/native";
import MenuButtonWithIcon from "../components/MenuButtonWithIcon";
import { SafeScreen } from "../components/Screen";
import { FlatList, View } from "react-native";

import colors from "../config/colors";
import { BasicText } from "../styled_components/elements/Text";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";

const menu = [
  {
    title: "My Listings",
    icon: "menu",
    color: colors.primary,
  },
  {
    title: "My Messages",
    icon: "mail",
    color: colors.secondary,
    targetScreen: "Messages Screen",
  },
];

export default function MyAccount({ navigation }) {
  return (
    <GreyScreen>
      <ProfileView>
        <ProfileImage source={require("../assets/mosh.jpg")} />
        <DetailView>
          <BoldText>Most</BoldText>
          <SubText>@mail.com</SubText>
        </DetailView>
      </ProfileView>
      <FlatListView>
        <FlatList
          data={menu}
          keyExtractor={(menu) => menu.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon} bgColor={item.color} />}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </FlatListView>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="log-out" bgColor="orange" />}
      />
    </GreyScreen>
  );
}

const GreyScreen = styled(SafeScreen)`
  flex: 1;
  background-color: ${colors.light};
`;

const ProfileView = styled.View`
  flex-direction: row;
  padding: 20px 20px;
  margin: 20px 0 30px 0;
  background-color: ${colors.white};
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const DetailView = styled.View`
  padding-left: 10px;
`;

const BoldText = styled(BasicText)`
  font-weight: bold;
`;

const SubText = styled(BasicText)`
  color: ${colors.medium};
`;

const FlatListView = styled.View`
  margin-bottom: 40px;
`;
