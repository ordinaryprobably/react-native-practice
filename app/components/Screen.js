import styled from "styled-components/native";
import Constants from "expo-constants";

export default function Screen({ children }) {
  return <SafeScreen>{children}</SafeScreen>;
}

// SafeAreaView doesn't support horizontal padding.
// 혹시 렌더링에 문제 생기면 flex: 1 삭제해보기.
export const SafeScreen = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;
