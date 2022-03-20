import styled from "styled-components/native";
import { SafeScreen } from "../components/Screen";
import { FlatList } from "react-native";

import colors from "../config/colors";
import Card from "../components/Card";
import { useState } from "react";

const initailItems = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "$200",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch sale",
    price: "$1300",
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingScreen() {
  const [items, setItems] = useState(initailItems);

  return (
    <GreyScreen>
      <StyleScreen>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.price}
              imageUrl={item.image}
            />
          )}
        />
      </StyleScreen>
    </GreyScreen>
  );
}

const GreyScreen = styled(SafeScreen)`
  flex: 1;
  background-color: ${colors.light};
`;

const StyleScreen = styled.View`
  padding: 30px 20px 0;
`;
