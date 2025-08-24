import { useMemo, useEffect } from "react";
import BudgetFrom from "./components/BudgetForm";
import useBudget from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";
import FilteredCategory from "./components/FilteredCategory";
function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);
  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(state.budget));
    localStorage.setItem("expenses", JSON.stringify(state.expense));
  }, [state]);

  return (
    <div className="min-h-screen bg-slate-200 text-sm">
      <header className="bg-blue-600 py-6 h-max-72">
        <h1 className="uppercase text-white text-center text-xl font-black">
          Planificador de gastos
        </h1>
      </header>
      <div className=" max-w-3xl bg-white rounded-lg mx-auto mt-10 shadow-lg p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetFrom />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-4">
          <FilteredCategory />
          <ExpenseModal />
          <ExpenseList />
        </main>
      )}
    </div>
  );
}

export default App;
