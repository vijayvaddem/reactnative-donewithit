import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccount from "./app/components/MyAccount";
import Icon from "./app/components/Icon";

import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

const image = { uri: "/assets/background.jpg" };

export default function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto",
    fontSize: 30,
    color: "tomato",
  },
});
