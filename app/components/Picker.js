import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./Text";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

function Picker({
  icon,
  items,
  numberOfColumns = 1,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  onSelectItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container} width={width}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.mediumgray}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.mediumgray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    //width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 20,
  },
  placeholder: {
    flex: 1,
    color: colors.mediumgray,
  },
  text: {
    flex: 1,
  },
});

export default Picker;
