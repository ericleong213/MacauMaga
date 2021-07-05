import React, { useState } from "react";
import { View, Text } from "react-native";

import Picker from "@gregfrench/react-native-wheel-picker";
var PickerItem = Picker.Item;

const WheelPicker = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [itemList, setItemList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  return (
    <View>
      <Text>
        <Picker
          style={{ width: 150, height: 180 }}
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={{ color: "blue", fontSize: 20 }}
          onValueChange={(index) => setSelectedItem(index)}
        >
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
      </Text>
    </View>
  );
};

export default WheelPicker;
