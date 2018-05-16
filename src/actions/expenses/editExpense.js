import { database } from "../../firebase"

const editExpense = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        database
        .ref(`users/${uid}/expenses`)
        .child(id)
        .set(update)
        .then(() => dispatch(editExpenseApp(id, update)))
    }
}

export const editExpenseApp = (id, update) => ({
    type: "EDIT_EXPENSE",
    id,
    update
})

export default editExpense