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
                    <div className="expense-list__header--expense">Expense</div>
                    <div className="expense-list__header--amount">Amount</div>
                </div>

                {expenses.map(expense => (
                    <ExpenseListItem
                    key={expense.id}
                    {...expense}
                    />
                ))}

            </div>


        </div>
    )
}

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: getVisibleExpenses(expenses, filters)
})

export default connect(mapStateToProps)(ExpenseList)
