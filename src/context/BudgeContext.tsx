import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { initialState, BudgeActions, BudgeState, budgeReducer } from "../reducers/budge-reducer"

type BudgeContextType = {
    state: BudgeState;
    dispatch: Dispatch<BudgeActions>;
}

type BudgeProviderProps = {
    children: ReactNode;
}

export const BudgeContext = createContext<BudgeContextType>(null!)

export default function BudgeProvider({children}:BudgeProviderProps) {
    const [state, dispatch] = useReducer(budgeReducer, initialState)
    
    return (
        <BudgeContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgeContext.Provider>
    )
    
}