import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Button,
  Platform,
  StatusBar,
  View,
  Text,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function Backup() {
  const handlePressed = () => {
    console.log("Text pressed");
  };
  console.log(useDimensions());

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          height: "30%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <ImageBackground source={require("/")} style={styles.backgroundImage}>
          <View
            style={{
              backgroundColor: "#46A32E",
              height: 100,
              width: 100,
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={styles.titleText}>Playing</Text>
            <Text style={styles.hourText}>4</Text>
            <Text style={styles.titleText}>Hours</Text>
          </View>
          <View
            style={{
              backgroundColor: "orange",
              height: 100,
              width: 100,
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={styles.titleText}>Exploring</Text>
            <Text style={styles.hourText}>3</Text>
            <Text style={styles.titleText}>Hours</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C259D9",
              height: 100,
              width: 100,
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={styles.titleText}>Resting</Text>
            <Text style={styles.hourText}>6</Text>
            <Text style={styles.titleText}>Hours</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  baseText: {
    fontFamily: "Cochin",
  },

  titleText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  hourText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
