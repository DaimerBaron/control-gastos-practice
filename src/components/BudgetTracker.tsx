import AmountDisplay from "./AmountDisplay";
import useBudget from "../hooks/useBudget";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BudgetTracker() {
  const { state, availableBudget, totalExpense } = useBudget();
  const porcentage = ((totalExpense / state.budget) * 100);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 select-none">
      <div className="flex justify-between items-center">
        <CircularProgressbar
          value={porcentage}
          styles={buildStyles({
            pathColor: "#3b82f6",
            textColor: "#3b82f6",
            trailColor: "#e5e7eb",
            backgroundColor: "#f3f4f6",
            textSize: "1rem",
            pathTransitionDuration: 0.5,
          })}
          text={`${porcentage.toFixed(2)} %`}
        />
      </div>
      <div className="flex flex-col justify-between items-center">
        <button
          type="button"
          className="bg-pink-600 text-white p-2 rounded-lg cursor-pointer hover:bg-pink-700 uppercase"
        >
          Resetear Presupuesto
        </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={availableBudget} />
        <AmountDisplay label="Gastado" amount={totalExpense} />
      </div>
    </div>
  );
}

export default BudgetTracker;
