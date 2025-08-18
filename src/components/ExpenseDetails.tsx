import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"



type ExpenseDetailsProps = {
    expense: Expense
}
function ExpenseDetails({expense}: ExpenseDetailsProps) {
   
    const category = categories.filter(category=> category.id===expense.category[0])
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full flex gap-4 mt-5 roudned-lg justify-between items-center ">
        <div>
            <img className="w-10 h-10" src={`/public/icono_${category[0]?.icon}.svg`} alt="" />
        </div>
        <div className="flex-1 space-y-1">
            <p className="font-bold uppercase">{expense.name}</p>
            <p>{expense.date?.toLocaleString()}</p>
            <p className="">{category[0]?.name}</p>
        </div>
        <AmountDisplay amount={expense.amount} />
    </div>
  )
}

export default ExpenseDetails