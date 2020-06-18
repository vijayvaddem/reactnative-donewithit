import React from "react";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({ icon, items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}

export default AppFormPicker;
