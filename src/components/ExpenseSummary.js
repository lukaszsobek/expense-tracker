import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import numeral from "numeral"

import { getExpensesSummary, getVisibleExpenses } from "../selectors"

export const ExpenseSummary = ({ expenses }) => {
    const { count, total } = getExpensesSummary(expenses)
    const summaryCount = count === 1 ? "1 expense " : `${count} expenses `
    const summaryTotal = numeral(total / 100).format("$0,0.00")
    return (
        <div className="page-header">
            <div className="app-container">
                Viewing <strong>{summaryCount}</strong>
                totalling <strong>{summaryTotal}</strong>

                <div>
                <Link className="button-link" to="/create">Add</Link>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: getVisibleExpenses(expenses, filters)
})

export default connect(mapStateToProps)(ExpenseSummary)

