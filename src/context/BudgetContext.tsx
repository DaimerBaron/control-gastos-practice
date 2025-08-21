import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { initialState, BudgetActions, BudgetState, budgetReducer } from "../reducers/budget-reducer"

type BudgetContextType = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
    totalExpense: number;
    availableBudget: number;
}

type BudgetProviderProps = {
    children: ReactNode;
}

export const BudgetContext = createContext<BudgetContextType>(null!)

export default function BudgetProvider({children}:BudgetProviderProps) {
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    const totalExpense = state.expense.reduce((total, expense)=>expense.amount + total,0)
    const availableBudget = state.budget - totalExpense;
    return (
        <BudgetContext.Provider value={{ state, dispatch, totalExpense, availableBudget }}>
            {children}
        </BudgetContext.Provider>
    )
    
}