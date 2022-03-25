import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

import ListingDetails from "../screens/ListingDetails";
import ListingScreen from "../screens/ListingScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name={routes.LISTING_SCREEN} component={ListingScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAIL_SCREEN}
        component={ListingDetails}
        options={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
