import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, numberOfLines, ellipsizeMode }) {
  return (
    <Text
      style={styles.text}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
