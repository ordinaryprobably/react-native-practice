import { createStackNavigator } from "@react-navigation/stack";

import MyAccount from "../screens/MyAccount";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function AccounNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT_SCREEN} component={MyAccount} />
      <Stack.Screen name={routes.MESSAGES_SCREEN} component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default AccounNavigator;
