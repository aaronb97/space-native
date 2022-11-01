import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: 330,
  },
});

export const Panel = ({ children }: { children: ReactElement }) => {
  return <View style={styles.panel}>{children}</View>;
};
