import { expenses } from "../../firebase"

export const removeExpenseApp = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

const removeExpense = ({ id } = {}) => {
    return dispatch => {
        expenses.child(id).remove()
        .then(() => dispatch(removeExpenseApp(id)))
    }
}

export default removeExpense