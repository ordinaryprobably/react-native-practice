import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccounNavigator from "./AccounNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED_SCREEN}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT_SCREEN}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("Listing Edit Screen")}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT_SCREEN}
        component={AccounNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
