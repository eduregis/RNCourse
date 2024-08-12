import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {}

  return (
    <View style={styles.primaryButtonContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.primaryButtonContent, styles.primaryButtonPressed]
            : styles.primaryButtonContent
        }
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
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
