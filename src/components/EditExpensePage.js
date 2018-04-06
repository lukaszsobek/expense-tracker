import React from "react"
import { connect } from "react-redux"
import { ExpenseForm } from "./"

import { editExpense, removeExpense } from "../actions"
import { getSingleExpense } from "../selectors"

const EditExpensePage = ({ editedExpense, dispatch, history }) => (
    <div>
        <h1>Edit expense</h1>
        <ExpenseForm
            editedExpense={editedExpense}
            onSubmit={(expense) => {
                dispatch(editExpense(editedExpense.id, expense))
                history.push("/")
            }}
            />
        <button
            onClick={() => {
                dispatch(removeExpense(editedExpense))
                history.push("/")
            }}
        >Remove</button>
    </div>
)

const mapStateToProps = ({ expenses }, props) => ({
    editedExpense: getSingleExpense(expenses, props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)