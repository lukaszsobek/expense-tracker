import { database } from "../../firebase"
import uuid from "uuid"

const addExpense = (expense = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

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

        return database
            .ref(`users/${uid}/expenses`)
            .push(formattedExpense)
            .then((ref) => dispatch(addExpenseApp({
                ...formattedExpense,
                id: ref.key
            })))
    }
}

export const addExpenseApp = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

export default addExpense