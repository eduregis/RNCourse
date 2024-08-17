import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MealInfo from "../components/MealInfo";
import Subtitle from "../components/MealDetails/Subtitle";

function MealDetailsScreen({ route, navigation }) {
  const meal = route.params.meal;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  }, [meal, navigation]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealInfo
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />
      <Subtitle text="Ingredients" />
      {meal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Subtitle text="Steps" />
      {meal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    cornerRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
    fontWeight: "bold",
  },
  detailText: {
    color: "white",
  },
});
