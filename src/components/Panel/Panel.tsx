import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: 330,
    alignSelf: "center",
    margin: 12,
    padding: 12,
    borderColor: "grey",
    borderWidth: 1,
  },
});

export const Panel = ({ children }: { children: ReactElement }) => {
  return <View style={styles.panel}>{children}</View>;
};
