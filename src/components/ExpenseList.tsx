import useBudget from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"

function ExpenseList() {
    const { state } = useBudget()
    const filteredExpenses = state.currentCategory?state.expense.filter((expense)=>expense.category===state.currentCategory):state.expense

    const empty = filteredExpenses.length === 0

    return (
        <div className="px-3 text-sm sm:text-base">
            {empty ? <p className=" font-bold uppercase">La lista está vacia</p> :
                <>
                    <p className=" font-bold uppercase text-center ">Lista de gastos</p>
                    {filteredExpenses.map((expense) => (
                        <ExpenseDetails key={expense.id} expense={expense} />
                    ))}
                </>}
        </div>
    )
}

export default ExpenseList