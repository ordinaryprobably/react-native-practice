import styled from "styled-components/native";
import Constants from "expo-constants";

export default function Screen({ children }) {
  return <SafeScreen>{children}</SafeScreen>;
}

// SafeAreaView doesn't support horizontal padding.
export const SafeScreen = styled.SafeAreaView`
  padding-top: ${Constants.statusBarHeight}px;
`;
