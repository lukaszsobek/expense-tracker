import React from "react"
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"

import { editExpense } from "../actions"
import { getSingleExpense } from "../selectors"

const EditExpensePage = ({ editedExpense, dispatch, history }) => (
    <div>
        <h1>Add expense</h1>
        <ExpenseForm
            editedExpense={editedExpense}
            onSubmit={(expense) => {
                dispatch(editExpense(editedExpense.id, expense))
                history.push("/")
            }}
            />
    </div>
)

const mapStateToProps = ({ expenses }, props) => ({
    editedExpense: getSingleExpense(expenses, props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)