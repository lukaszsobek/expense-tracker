import React from "react"
import { connect } from "react-redux"

import ExpenseListItem from "./ExpenseListItem"
import { getVisibleExpenses } from "../selectors"

export const ExpenseList = ({ expenses }) => {

    if(!expenses) {
        return <div>No expenses defined</div>
    }

    return (
        <div>
            {expenses.map(expense => (
                <ExpenseListItem
                key={expense.id}
                {...expense}
                />
            ))}
        </div>
    )
}

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: getVisibleExpenses(expenses, filters)
})

export default connect(mapStateToProps)(ExpenseList)
