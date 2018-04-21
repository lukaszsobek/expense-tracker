import React from "react"
import { connect } from "react-redux"

import { expenses } from "../firebase"
import { ExpenseList, ExpenseListFilters, ExpenseSummary } from "./"
import { setExpenses } from "../actions"

export const ExpenseDashboardPage = ({ setExpenses }) => {

    const expensesList = []

    expenses.once("value").then(items => {
        items.forEach(item => {
            expensesList.push({
                id: item.key,
                ...item.val()
            })
        })
    }).then(() => setExpenses(expensesList))

    return(
        <div>
            <ExpenseSummary />
            <ExpenseListFilters />
            <ExpenseList expenses={expensesList} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setExpenses: expenses => dispatch(setExpenses(expenses))
})

export default connect(null, mapDispatchToProps)(ExpenseDashboardPage)