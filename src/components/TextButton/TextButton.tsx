import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface Props {
  onPress: () => unknown;
  title: string;
}

export default function TextButton({ title, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    borderColor: "grey",
    borderWidth: 2,
  },
  text: {
    color: "white",
  },
});
