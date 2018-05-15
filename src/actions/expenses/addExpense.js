import { database } from "../../firebase"
import uuid from "uuid"

export const addExpenseApp = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

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

export default addExpense