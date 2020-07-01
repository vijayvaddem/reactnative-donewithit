import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  NetInfo.fetch().then((netinfo) => console.log(netinfo));
  return null;
}
