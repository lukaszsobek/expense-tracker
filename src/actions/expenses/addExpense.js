import { expenses } from "../../firebase"
import uuid from "uuid"


const addExpenseApp = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

const addExpense = (expense = {}) => {
    return dispatch => {

        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expense

        const formattedExpense = {
            description,
            note,
            amount,
            createdAt
        }

        return expenses
            .push(formattedExpense)
            .then((ref) => dispatch(addExpenseApp({
                ...formattedExpense,
                id: ref.key
            })))
    }
}

export { addExpenseApp }
export default addExpense