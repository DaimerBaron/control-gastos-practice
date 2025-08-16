export type BudgeActions = {
    type: 'add-budge', payload: {budge:number}
}

export type BudgeState = {
    budge: number
}
export const initialState: BudgeState = {
    budge:0
}

export const budgeReducer = (state: BudgeState = initialState, action: BudgeActions) =>{
   switch (action.type){
        case 'add-budge':
            return {
                ...state, budge: action.payload.budge
            }
        default:
            return state;
   }
}