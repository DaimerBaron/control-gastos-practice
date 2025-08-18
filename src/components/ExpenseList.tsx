import useBudget from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"
import { useMemo } from "react";


function ExpenseList() {
    const { state } = useBudget()
    const empty = useMemo(() => state.expense.length === 0, [state.expense])

    return (
        <div>
            {empty ? <p className=" font-bold uppercase">La lista está vacia</p> :
                <>
                    <p className=" font-bold uppercase text-center">Lista de gastos</p>
                    {state.expense.map((expense) => (
                        <ExpenseDetails key={expense.id} expense={expense} />
                    ))}
                </>}
        </div>
    )
}

export default ExpenseList