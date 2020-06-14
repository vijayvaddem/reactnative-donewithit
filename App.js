import React, { useState } from "react";
import { TextInput, Text } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Username" />
    </Screen>
  );
}
