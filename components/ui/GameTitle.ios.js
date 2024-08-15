import { Text, StyleSheet, Platform } from "react-native";

function GameTitle({ children }) {
  return <Text style={styles.gameTitle}>{children}</Text>;
}

export default GameTitle;

const styles = StyleSheet.create({
  gameTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
