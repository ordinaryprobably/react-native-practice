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
import { useEffect, useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const categories = [
  { label: "food", value: 1 },
  { label: "bike", value: 2 },
  { label: "korea", value: 3 },
];

const dummyText =
  "F-Lab은 개발자들의 지식공유 커뮤니티를 운영하고 있습니다. 이 커뮤니티에는 세계적인 IT기업에서 근무하는 개발자, 유명 서적 저자 등 실력이 뛰어나기로 유명하신 분들이 모여있습니다. 또한 F-Lab 멘토링을 수료하고, 상위 IT 서비스 기업에 재직중인 뛰어난 주니어 개발자들도 만나볼 수 있습니다. F-Lab의 커뮤니티에 합류하시게 되면, 이런 뛰어난 개발자들과 교류하실 수 있으며 공간 제공 등 다양한 혜택도 받아보실 수 있습니다. 이 커뮤니티에서는 멘토링 활동, 혹은 강의나 집필과 같이 지식공유활동에 관심있는 사람들이 인사이트를 공유하고 있습니다. 지식공유활동에 관심이 많으신 개발자분들의 신청을 기다립니다 [최소자격] - 스스로 동기부여하여 꾸준히 학습을 하시는 분 - 이력에 타이틀이 있으신 분 - 개발자 교육, 멘토링, 집필 등 지식 공유활동에 관심이 많으신 분";

export default function App() {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();

    if (!result.granted) {
      alert("You need to allow Expo to access camera.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  // const [category, setCategory] = useState(null);
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
  // return (
  //   <Screen>
  //     <ListItem
  //       title="most"
  //       description={dummyText}
  //       imageUrl={require("./app/assets/mosh.jpg")}
  //       renderRightAction={ListItemDeleteAction}
  //       showChevrons
  //       numberOfLines={2}
  //     />
  //   </Screen>
  // );
  // return (
  //   <Screen>
  //     <Button title="Select Image" onPress={selectImage} />
  //     <Image
  //       source={{
  //         uri: imageUri,
  //       }}
  //       style={{ width: 200, height: 200 }}
  //     />
  //   </Screen>
  // );
  // return (
  //   <ImageInput imageUri={null} onChangeImage={() => console.log("image")} />
  // );
  // return (
  //   <Screen>
  //     <ImageInputList
  //       imageUris={imageUris}
  //       onAddImage={addImageUri}
  //       onRemoveImage={removeImageUri}
  //     />
  //   </Screen>
  // );
}
const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "grey",
  //   borderRadius: 10,
  //   padding: 20,
  //   paddingTop: 100,
  // },
});
