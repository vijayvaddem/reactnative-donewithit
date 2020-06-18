import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import AppPicker from "../components/AppPicker";
import AppFormPicker from "../components/forms/AppFormPicker";

const categories = [
  {
    label: "Furniture",
    value: "1",
  },
  {
    label: "Clothing",
    value: "2",
  },
  {
    label: "Photography",
    value: "3",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          placeholder="Title"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          autoCapitalize="none"
          multiline
          numberOfLines={3}
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 50,
  },
});

export default ListingEditScreen;
