import { database } from "../../firebase"

const removeExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        console.log(id)
        const uid = getState().auth.uid
        database
        .ref(`users/${uid}/expenses`)
        .child(id)
        .remove()
        .then(() => dispatch(removeExpenseApp(id)))
    }
}

export const removeExpenseApp = id => ({
    type: "REMOVE_EXPENSE",
    id
})

export default removeExpense