import React, { useEffect, useState } from "react";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";

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
      <ImageInputList
        imageUris={imageUris}
        onChangeImage={(uri) => setImageUris(uri)}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri) => handleDelete(uri)}
      />
    </Screen>
  );
}
