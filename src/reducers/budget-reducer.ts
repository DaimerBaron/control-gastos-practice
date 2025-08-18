import { DraftExpense } from "../types"

export type BudgetActions = 
{type: 'add-budget', payload: {budget:number}}|
{type: 'show-modal'}|{type: 'close-modal'}|
{type: 'add-expense', payload:{expense:DraftExpense}}

export type BudgetState = {
    budget: number
    modal: boolean
    expense: DraftExpense[]
}
export const initialState: BudgetState = {
    budget:0,
    modal: false,
    expense:[]
}

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) =>{
   switch (action.type){
        case 'add-budget':
            return {
                ...state, budget: action.payload.budget
            }
        case 'show-modal':
            return {
                ...state, modal:true
            }
        case 'close-modal':
            return {
                ...state, modal:false
            }
        case 'add-expense':
            console.log(state);
            
            return {
                ...state, expense:[...state.expense,action.payload.expense]
            }
        default:
            return state;
   }
}