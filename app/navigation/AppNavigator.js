import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import MyAccount from "../screens/MyAccount";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed Screen" component={FeedNavigator} />
      <Tab.Screen name="Listing Edit Screen" component={ListingEditScreen} />
      <Tab.Screen name="My Account Screen" component={MyAccount} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
