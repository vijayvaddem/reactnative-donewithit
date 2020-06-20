import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import AppPicker from "../components/AppPicker";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const categories = [
  {
    label: "Furniture",
    value: "1",
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: "2",
    backgroundColor: "lightblue",
    icon: "email",
  },
  {
    label: "Cameras",
    value: "3",
    backgroundColor: "gold",
    icon: "lock",
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
      <View style={styles.formContainer}>
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
            width={120}
          />
          <AppFormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            width="50%"
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
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 50,
  },
  formContainer: {
    backgroundColor: "red",
  },
});

export default ListingEditScreen;
