import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import StyleButton from "./app/components/Button";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccount from "./app/screens/MyAccount";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "food", value: 1 },
  { label: "bike", value: 2 },
  { label: "korea", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(null);
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <StyleButton />;
  // return <ListingDetails title="Free Jacket" subtitle="$100" />;
  // return <MessagesScreen />;
  // return <MyAccount />;
  // return <ListingScreen />;
  // return (
  //   <Screen>
  //     <AppPicker
  //       icon="apps"
  //       placeholder="Categories"
  //       items={categories}
  //       selectedItem={category}
  //       onItemSelect={(item) => setCategory(item)}
  //     />
  //   </Screen>
  // return <LoginScreen />;
  // return <RegisterScreen />;
  return <ListingEditScreen />;
}
const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "grey",
  //   borderRadius: 10,
  //   padding: 20,
  //   paddingTop: 100,
  // },
});
