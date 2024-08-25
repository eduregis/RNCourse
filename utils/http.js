import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-658a6-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
