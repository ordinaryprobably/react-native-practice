import styled from "styled-components/native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import AppForm from "../components/Forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen>
      <LoginView>
        <LogoImage source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
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
