import { expenses } from "../firebase"

const expensesReducerInitialState = []

const expensesReducer = (state = expensesReducerInitialState, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]

        case "REMOVE_EXPENSE":
            return state.filter(
              expense => expense.id != action.id
            )

        case "EDIT_EXPENSE":
            return state.map(expense => {
                if(expense.id !== action.id) {
                    return expense
                }
                
                return {
                    ...expense,
                    ...action.update
                }
            })

        case "SET_EXPENSES":
            return [
                ...action.expenses
            ]

        default:
            return state
    }
}

export default expensesReducer