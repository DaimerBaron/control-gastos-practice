import { useMemo } from "react";
import BudgetFrom from "./components/BudgetForm"
import useBudget from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";

function App() {

  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget>0, [state.budget] )

  return (
   <>
    <header className="bg-blue-600 py-6 h-max-72" >
      <h1 className="uppercase text-white text-center text-xl font-black">Planificador de gastos</h1>
    </header>
    <div className=" max-w-3xl bg-white rounded-lg mx-auto mt-10 shadow-lg p-10">
      {isValidBudget ? <BudgetTracker /> : <BudgetFrom />}
    </div>

   </>
  )
}

export default App
