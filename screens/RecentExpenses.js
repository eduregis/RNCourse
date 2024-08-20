import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;

const styles = StyleSheet.create({});
