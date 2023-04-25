import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
const Greeting = ({ defaultName }) => {
  const [name, setName] = useState(defaultName);

  return (
    <View>
      <TextInput
        placeholder="Enter your name..."
        onChangeText={(text) => setName(text)}
      />
      <Text>Hello {name}!</Text>
    </View>
  );
};
export default Greeting;
