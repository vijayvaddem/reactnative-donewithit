import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../assets/Vijay.jpg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../assets/Vijay.jpg"),
  },
  {
    id: "3",
    title: "T3",
    description: "D3",
    image: require("../assets/Vijay.jpg"),
  },
  {
    id: "4",
    title: "T4",
    description: "D4",
    image: require("../assets/Vijay.jpg"),
  },
  {
    id: "5",
    title: "T5",
    description: "D1",
    image: require("../assets/Vijay.jpg"),
  },
];

function handlePress() {
  console.log("List item touched");
}

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  console.log(initialMessages);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("List item touched", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          //setRefreshing(true);
          setMessages([
            {
              id: "6",
              title: "T6",
              description: "D6",
              image: require("../assets/Vijay.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
