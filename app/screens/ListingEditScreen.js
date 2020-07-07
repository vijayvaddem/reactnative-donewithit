import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import FormPicker from "../components/forms/FormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const categories = [
  {
    label: "Furniture",
    value: "1",
    backgroundColor: "red",
    icon: "sofa",
  },
  {
    label: "Clothing",
    value: "2",
    backgroundColor: "lightblue",
    icon: "tshirt-crew",
  },
  {
    label: "Cameras",
    value: "3",
    backgroundColor: "gold",
    icon: "camera",
  },
  {
    label: "Stationary",
    value: "4",
    backgroundColor: "#00adb5",
    icon: "pen",
  },
  {
    label: "Mobile",
    value: "5",
    backgroundColor: "#393e46",
    icon: "cellphone",
  },
  {
    label: "Craft",
    value: "5",
    backgroundColor: "#393e46",
    icon: "minecraft",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Select at least one image"),
});

function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
    // alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        visible={uploadVisible}
        progress={progress}
      />
      <View style={styles.formContainer}>
        <Form
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormImagePicker name="images" />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="title"
            placeholder="Title"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="price"
            placeholder="Price"
            keyboardType="numeric"
            width={120}
          />
          <FormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            width="50%"
          />
          <FormField
            autoCapitalize="none"
            multiline
            numberOfLines={3}
            autoCorrect={false}
            name="description"
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </Form>
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
    //backgroundColor: "red",
  },
});

export default ListingEditScreen;
