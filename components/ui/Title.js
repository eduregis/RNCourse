import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function GameTitle({ children }) {
  return <Text style={styles.gameTitle}>{children}</Text>;
}

export default GameTitle;

const styles = StyleSheet.create({
  gameTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
