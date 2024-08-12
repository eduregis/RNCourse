import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }

  return (
    <View style={styles.primaryButtonContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.primaryButtonContent, styles.primaryButtonPressed]
            : styles.primaryButtonContent
        }
        android_ripple={{ color: Colors.rippledPlum }}
      >
        <Text style={styles.primaryButtonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  primaryButtonContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  primaryButtonContent: {
    backgroundColor: Colors.primaryPlum,
    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
  },
  primaryButtonPressed: {
    opacity: 0.75,
  },
  primaryButtonText: {
    color: "white",
    textAlign: "center",
  },
});
