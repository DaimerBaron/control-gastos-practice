import AmountDisplay from "./AmountDisplay"

function BudgetTracker() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 select-none">
    <div className="flex justify-between items-center">
        <img src="/public/grafico.jpg" alt="budget" />
    </div>
    <div className="flex flex-col justify-between items-center">
        <button type="button" className="bg-pink-600 text-white p-2 rounded-lg cursor-pointer hover:bg-pink-700 uppercase">
            Resetear Presupuesto
        </button>

        <AmountDisplay label="Presupuesto" amount={200} />
        <AmountDisplay label="Disponible" amount={300} />
        <AmountDisplay label="Gastado" amount={100} />
    </div>
   </div>
  )
}

export default BudgetTracker