import AmountDisplay from "./AmountDisplay"
import useBudget from "../hooks/useBudget";

function BudgetTracker() {
    const { state, availableBudget, totalExpense } = useBudget();
  
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 select-none">
    <div className="flex justify-between items-center">
        <img src="/public/grafico.jpg" alt="budget" />
    </div>
    <div className="flex flex-col justify-between items-center">
        <button type="button" className="bg-pink-600 text-white p-2 rounded-lg cursor-pointer hover:bg-pink-700 uppercase">
            Resetear Presupuesto
        </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={availableBudget} />
        <AmountDisplay label="Gastado" amount={totalExpense} />
    </div>
   </div>
  )
}

export default BudgetTracker