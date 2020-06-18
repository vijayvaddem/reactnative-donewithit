import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color={colors.primary} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.secondary}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    //backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    //backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
