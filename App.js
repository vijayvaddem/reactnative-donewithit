import React, { useState } from "react";
import { TextInput, Text, Switch } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppText from "./app/components/AppText.android";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const toggleSwitch = () => setIsNew((isNew) => !isNew);
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
