import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagline}>Sell what you don't need!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => console.log("Logging in")} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => console.log("Logging in")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    marginTop: 20,
  },
  caption: {
    top: 200,
    position: "absolute",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
