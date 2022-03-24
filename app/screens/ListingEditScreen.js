import React, { useState } from "react";
import styled from "styled-components/native";
import AppForm from "../components/Forms/AppForm";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/Forms/AppFormField";
import FormImagePicker from "../components/Forms/FormImagePicker";
import AppFormPicker from "../components/Forms/AppFormPicker";
import SubmitButton from "../components/Forms/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().required(),
  images: Yup.array().min(1, "You have to add at least 1 image."),
});

const categories = [
  { label: "food", value: 1 },
  { label: "bike", value: 2 },
  { label: "korea", value: 3 },
];

function ListingEditScreen() {
  return (
    <Screen>
      <LoginView>
        <AppForm
          initialValues={{
            title: "",
            price: 0,
            category: "",
            description: "",
            images: [],
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Title"
            name="title"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Price ($)"
            name="price"
            width={130}
          />
          <AppFormPicker
            items={categories}
            placeholder="Category"
            name="category"
            width={170}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholder="Description"
            name="description"
          />
          <SubmitButton text="post" />
        </AppForm>
      </LoginView>
    </Screen>
  );
}

const LoginView = styled.View`
  padding: 0 15px;
`;

export default ListingEditScreen;
