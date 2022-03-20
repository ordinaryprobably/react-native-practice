import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import StyleButton from "./app/components/Button";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccount from "./app/screens/MyAccount";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <StyleButton />;
  // return <ListingDetails title="Free Jacket" subtitle="$100" />;
  // return <MessagesScreen />;
  // return <MyAccount />;
  return <ListingScreen />;
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "grey",
  //   borderRadius: 10,
  //   padding: 20,
  //   paddingTop: 100,
  // },
});
