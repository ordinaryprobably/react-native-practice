import styled from "styled-components/native";
import { useEffect } from "react";
import { SafeScreen } from "../components/Screen";
import { FlatList, ActivityIndicator } from "react-native";

import colors from "../config/colors";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import StyleButton from "../components/Button";
import useApi from "../hooks/useApi";

export default function ListingScreen({ navigation }) {
  const {
    data: listings,
    hasError,
    isLoading,
    loadData: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <GreyScreen>
      <StyleScreen>
        {hasError && (
          <StyleButton
            text="Something went wrong...Turn on node server."
            onPress={loadListings}
          />
        )}
        <ActivityIndicator animating={isLoading} size="large" />
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.price}
              imageUrl={item.images[0].url}
              onPress={() =>
                navigation.navigate("Listing Detail Screen", {
                  title: item.title,
                  subtitle: item.subtitle,
                  imageUrl: item.images[0].url,
                })
              }
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
