import { createStackNavigator } from "@react-navigation/stack";

import ListingDetails from "../screens/ListingDetails";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listing Screen" component={ListingScreen} />
      <Stack.Screen name="Listing Detail Screen" component={ListingDetails} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
