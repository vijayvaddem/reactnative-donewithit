import React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
