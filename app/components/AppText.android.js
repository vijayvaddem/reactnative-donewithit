import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style, numberOfLines, ellipsizeMode }) {
  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
