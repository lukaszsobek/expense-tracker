import { database } from "../../firebase"

export const editExpenseApp = (id, update) => ({
    type: "EDIT_EXPENSE",
    id,
    update
})

const editExpense = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        database
        .ref(`users/${uid}/expenses`)
        .child(id)
        .set(update)
        .then(() => dispatch(editExpense(id, update)))
    }
}

export default editExpense