import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppText from "./app/components/Text";

function Tweets({ navigation }) {
  return (
    <Screen>
      <AppText>Tweets</AppText>
      <Button
        title="Go to Tweet details"
        onPress={() => navigation.navigate("Tweet details")}
      />
    </Screen>
  );
}

function TweetDetails({ navigation }) {
  return (
    <Screen>
      <AppText>Tweet details</AppText>
      <Button title="Go back" onPress={() => navigation.navigate("Tweets")} />
    </Screen>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="Tweet details" component={TweetDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
