import React, { useState } from "react";
import styled from "styled-components/native";
import AppForm from "../components/Forms/AppForm";
import Screen from "../components/Screen";
import AppFormField from "../components/Forms/AppFormField";
import FormImagePicker from "../components/Forms/FormImagePicker";
import AppFormPicker from "../components/Forms/AppFormPicker";
import SubmitButton from "../components/Forms/SubmitButton";
import * as Yup from "yup";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.string().required(),
  images: Yup.array().min(1, "You have to add at least 1 image."),
});

const categories = [
  { label: "food", value: 1 },
  { label: "bike", value: 2 },
  { label: "korea", value: 3 },
];

function ListingEditScreen() {
  const location = useLocation();
  const [modalShown, setModalShown] = useState(false);
  const [progress, setProgress] = useState(0);

  // Formik passes <values, formikBag> to its submit handler.
  // formikBag includes many useful methods.
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setModalShown(true);
    const response = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setModalShown(false);

    if (!response.ok) return alert("Could not post your request.");

    alert("Sucess");
    resetForm();
  };

  return (
    <Screen>
      <LoginView>
        <UploadScreen progress={progress} isVisible={modalShown} />
        <AppForm
          initialValues={{
            title: "",
            price: "",
            category: "",
            description: "",
            images: [],
          }}
          onSubmit={handleSubmit}
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
