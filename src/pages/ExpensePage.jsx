import React from "react";
import AddExpenseForm from "../components/expenses/ui/AddExpenseForm";
import ExpenseContainer from "../components/expenses/ExpenseContainer";

const ExpensePage = () => {
  return (
    <div>
      <AddExpenseForm />
      <ExpenseContainer />
    </div>
  );
};

export default ExpensePage;
