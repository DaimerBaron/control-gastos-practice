import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { initialState, BudgetActions, BudgetState, budgetReducer } from "../reducers/budget-reducer"

type BudgetContextType = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
}

type BudgetProviderProps = {
    children: ReactNode;
}

export const BudgetContext = createContext<BudgetContextType>(null!)

export default function BudgetProvider({children}:BudgetProviderProps) {
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    console.log(state);
    
    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )
    
}