import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import StyleButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const AuthNavigator = useNavigation();

  return (
    <ImageBackground
      style={style.background}
      source={require("../assets/background.jpg")}
      blurRadius={70}
    >
      <View style={style.logoContainer}>
        <Image style={style.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need!</Text>
      </View>
      <StyleButton
        color="primary"
        text="log in"
        onPress={() => AuthNavigator.navigate("Login Screen")}
      />
      <StyleButton
        color="secondary"
        text="register"
        onPress={() => AuthNavigator.navigate("Register Screen")}
      />
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    top: 50,
    marginTop: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
