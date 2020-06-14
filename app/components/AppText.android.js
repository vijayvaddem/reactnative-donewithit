import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style, numberOfLines, ellipsizeMode }) {
  return (
    <Text
      style={[defaultStyles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
}

export default AppText;
