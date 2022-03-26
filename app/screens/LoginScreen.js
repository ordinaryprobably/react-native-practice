import { useContext, useState } from "react";
import styled from "styled-components/native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import AppForm from "../components/Forms/AppForm";
import ErrorMessage from "../components/Forms/ErrorMessage";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const authContext = useContext(AuthContext);

  const handleSubmit = async (formikValues) => {
    const result = await authApi.login(
      formikValues.email,
      formikValues.password
    );

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);

    const userCredentials = jwtDecode(result.data);

    authContext.setUser(userCredentials);
    authStorage.storeTokenToStorage(result.data);
  };

  return (
    <Screen>
      <LoginView>
        <LogoImage source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid user credentials."
            visible={loginFailed}
          />
          <AppFormField
            icon="mail"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
            name="email"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            name="password"
          />
          <SubmitButton text="Login" />
        </AppForm>
      </LoginView>
    </Screen>
  );
}

const LoginView = styled.View`
  padding: 0 15px;
`;

const LogoImage = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
