import React from "react"
import { connect } from "react-redux"

import ExpenseListItem from "./ExpenseListItem"
import { getVisibleExpenses } from "../selectors"

const ExpenseList = ({ expenses }) => (
    <div>
        {expenses.map(expense => (
            <ExpenseListItem
            key={expense.id}
            {...expense}
            />
        ))}
    </div>
)

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
