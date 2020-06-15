import React, { useState } from "react";
import { TextInput, Text, Switch } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppText from "./app/components/AppText.android";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return <LoginScreen />;
}
