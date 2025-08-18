import { DraftExpense, Expense } from "../types"
import { v4 as uuidv4 } from 'uuid';

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } | { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense } }

export type BudgetState = {
    budget: number
    modal: boolean
    expense: Expense[]
}
export const initialState: BudgetState = {
    budget: 0,
    modal: false,
    expense: []
}

const createExpense = (expense: DraftExpense): Expense => {
    return {
        ...expense, id: uuidv4()
    }
}

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
    switch (action.type) {
        case 'add-budget':
            return {
                ...state, budget: action.payload.budget
            }
        case 'show-modal':
            return {
                ...state, modal: true
            }
        case 'close-modal':
            return {
                ...state, modal: false
            }
        case 'add-expense':
            const newExpense = createExpense(action.payload.expense);

            return {
                ...state, expense: [...state.expense, newExpense], modal: false
            }
        default:
            return state;
    }
}