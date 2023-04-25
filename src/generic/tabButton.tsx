import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  color: string;
  onPress: () => void;
  text?: string;
  iconName?: string;
  focused?: boolean;
}
const TabButton = (props: Props) => {
  const { color, onPress, text, iconName = "add", focused } = props;
  const enabled = !!onPress;

  return (
    <TouchableOpacity onPress={onPress} disabled={!enabled}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={iconName} color={color} size={24} />
        {text && focused ? (
          <Text style={{ color, fontSize: 10 }}>{text}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;
