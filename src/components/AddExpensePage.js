import React from "react"
import { connect } from "react-redux"
import ExpenseForm from "./AddExpenseForm"

import { addExpense } from "../actions"

const AddExpensePage = ({ dispatch }) => (
    <div>
    <h1>Add expense</h1>
    <ExpenseForm
        onSubmit={(expense) => {
            dispatch(addExpense(expense))
        }}
    />
    </div>
)

export default connect()(AddExpensePage)