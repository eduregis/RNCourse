import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

function AllExpenses() {
  return <ExpensesOutput expensesPeriod="Total" />;
}

export default AllExpenses;

const styles = StyleSheet.create({});
