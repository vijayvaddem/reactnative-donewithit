import React from "react";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({
  numberOfColumns,
  width,
  items,
  name,
  PickerItemComponent,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      ></Picker>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}

export default AppFormPicker;
