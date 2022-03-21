import styled from "styled-components/native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import StyleButton from "../components/Button";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { BasicText } from "../styled_components/elements/Text";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      <LoginView>
        <LogoImage source={require("../assets/logo-red.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                icon="mail"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="Email"
                onChangeText={handleChange("email")}
              />
              <BasicText>{errors.email}</BasicText>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              <BasicText>{errors.password}</BasicText>
              <StyleButton text="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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
