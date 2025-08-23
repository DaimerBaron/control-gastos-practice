import { DraftExpense, Expense } from "../types"
import { v4 as uuidv4 } from 'uuid';

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } | { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense } } |
    { type: 'delete-expense', payload: { id: Expense['id'] } } |
    { type: 'edit-expense', payload: { id: Expense['id'] } } |
    { type: 'update-expense', payload: { expense: Expense } }|
    {type: 'reset'}

export type BudgetState = {
    budget: number
    modal: boolean
    expense: Expense[]
    editingId: string
}

const localStorageBudget = (): number=>{
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? Number(JSON.parse(localStorageBudget)) : 0
}

const localStorageExpense = ():Expense[]=>{
    const localStorageExpense = localStorage.getItem('expenses')
    return localStorageExpense ? JSON.parse(localStorageExpense) : []
}
export const initialState: BudgetState = {
    budget: localStorageBudget(),
    modal: false,
    expense: localStorageExpense(),
    editingId: ''
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
                ...state, modal: false, editingId: ''
            }
        case 'add-expense':
            {
                const newExpense = createExpense(action.payload.expense)

                return {
                    ...state, expense: [...state.expense, newExpense], modal: false
                }
            }
        case 'delete-expense':
            {
                const updateExpenses = state.expense.filter(expense => expense.id !== action.payload.id)

                return {
                    ...state, expense: updateExpenses
                }
            }
        case 'edit-expense':
            return {
                ...state, editingId: action.payload.id, modal: true
            }
        case 'update-expense':
            {
                return {
                    ...state, expense: state.expense.map(expense => expense.id == action.payload.expense.id ? action.payload.expense : expense), editingId: '', modal: false
                }
            }
        case 'reset':
            return {
                ...state, budget: 0, expense: [], editingId: ''
            }
        default:
            return state;
    }
}