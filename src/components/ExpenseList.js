import React from "react"
import { connect } from "react-redux"

import { expenses } from "../firebase"

import ExpenseListItem from "./ExpenseListItem"
import { getVisibleExpenses } from "../selectors"

export const ExpenseList = ({ expenses }) => {

    if(!expenses) {
        return <div>No expenses defined</div>
    }

    return (
        <div className="app-container">

            <div className="expense-list">
                <div className="expense-list__header">
                    <div>Expense</div>
                    <div>Amount</div>
                </div>
            </div>
            
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
