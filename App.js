import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppText from "./app/components/Text";
import AccountScreen from "./app/screens/AccountScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";

function Tweets({ navigation }) {
  return (
    <Screen>
      <AppText>Tweets</AppText>
      <Button
        title="Go to Tweet details"
        onPress={() =>
          navigation.navigate("Tweet details", { id: 1, name: "Hello world" })
        }
      />
    </Screen>
  );
}

function TweetDetails({ navigation, route }) {
  return (
    <Screen>
      <AppText>Tweet details {route.params.name}</AppText>
      <Button title="Go back" onPress={() => navigation.navigate("Tweets")} />
    </Screen>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Tweet details"
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const BottonTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={ListingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="apps" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="lock" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    //<WelcomeScreen />
  );
}
