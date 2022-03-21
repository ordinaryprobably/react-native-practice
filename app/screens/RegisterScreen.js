import React from "react";
import styled from "styled-components/native";
import * as Yup from "yup";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <LoginView>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            icon="user"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Name"
            name="name"
          />
          <AppFormField
            icon="mail"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Email"
            name="email"
          />
          <AppFormField
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Password"
            name="password"
          />
          <SubmitButton text="Register" />
        </AppForm>
      </LoginView>
    </Screen>
  );
}

const LoginView = styled.View`
  padding: 0 15px;
`;

export default RegisterScreen;
