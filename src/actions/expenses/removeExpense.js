import { expenses } from "../../firebase"

const removeExpenseApp = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

export const removeExpense = ({ id } = {}) => {
    
    // remove expense from app
    // remove expense from database
    expenses.child(id).remove().then(x => console.log("removed"))

}

export default removeExpense