import { database } from "../../firebase"

export const removeExpenseApp = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

const removeExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        database
        .ref(`users/${uid}/expenses`)
        .child(id)
        .remove()
        .then(() => dispatch(removeExpenseApp(id)))
    }
}

export default removeExpense