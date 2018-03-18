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
              expense => expense.id !== action.id
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

            console.log(state, action)
            return state

        default:
            return state
    }
}

export default expensesReducer