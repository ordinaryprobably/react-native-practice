import styled from "styled-components/native";
import { TouchableOpacity, Modal, Button, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { BasicText } from "../styled_components/elements/Text";
import { useState } from "react";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

export default function AppPicker({
  icon,
  items,
  selectedItem,
  placeholder,
  onItemSelect,
  width,
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        underlayColor={colors.light}
        onPress={() => setIsVisible(true)}
      >
        <TextView width={width}>
          <CategoryIcon name={icon} size={24} color={colors.medium} />
          <PickerText>
            {selectedItem ? selectedItem.label : placeholder}
          </PickerText>
          <Feather name="chevron-down" size={24} color={colors.medium} />
        </TextView>
      </TouchableOpacity>
      <Modal visible={isVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setIsVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onItemSelect(item);
                  setIsVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const TextView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: ${colors.light};
  border-radius: 8px;
  margin: 10px 0;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
`;

const PickerText = styled(BasicText)`
  color: ${colors.medium};
  flex: 1;
`;

const CategoryIcon = styled(MaterialCommunityIcons)`
  margin-right: 10px;
`;
