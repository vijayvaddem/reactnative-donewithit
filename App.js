import React, { useEffect, useState } from "react";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleDelete = (uri) => {
    setImageUris(imageUris.filter((u) => u !== uri));
  };

  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
