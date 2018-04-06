import React from "react"
import { connect } from "react-redux"
import { ExpenseForm } from "./"

import { addExpense } from "../actions"

const AddExpensePage = ({ dispatch, history }) => (
    <div>
    <h1>Add expense</h1>
    <ExpenseForm
        onSubmit={(expense) => {
            dispatch(addExpense(expense))
            history.push("/")
        }}
    />
    </div>
)

export default connect()(AddExpensePage)