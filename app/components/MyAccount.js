import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./Text";
import colors from "../config/colors";
import Screen from "./Screen";

function MyAccount(props) {
  return (
    <Screen>
      <View style={styles.viewContainer}>
        <View style={styles.container}>
          <Image source={require("../assets/Vijay.jpg")} style={styles.image} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>Vijay V</AppText>
            <AppText style={styles.subtitle}>vijay.vaddem@gmail.com</AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.light,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
    paddingTop: 15,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: "column",
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginRight: 10,
  },
  subtitle: {
    color: colors.mediumgray,
  },
  title: {
    fontWeight: "500",
  },
});

export default MyAccount;
