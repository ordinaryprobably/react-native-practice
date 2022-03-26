import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.WELCOME_SCREEN}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={routes.REGISTER_SCREEN} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
