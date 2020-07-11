import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    opacity: 0.8,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
  },
});

export default ActivityIndicator;
