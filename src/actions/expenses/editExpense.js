import { expenses } from "../../firebase"

export const editExpenseApp = (id, update) => ({
    type: "EDIT_EXPENSE",
    id,
    update
})

const editExpense = (id, update) => {
    return dispatch => {
        expenses.child(id).set(update)
        .then(() => dispatch(editExpense(id, update)))
    }
}

export default editExpense