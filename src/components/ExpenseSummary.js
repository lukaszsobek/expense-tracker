import React from "react"
import { connect } from "react-redux"
import numeral from "numeral"

import { getExpensesSummary, getVisibleExpenses } from "../selectors"

export const ExpenseSummary = ({ expenses }) => {
    const { count, total } = getExpensesSummary(expenses)
    const summaryCount = count === 1 ? "1 expense " : `${count} expenses `
    const summaryTotal = numeral(total / 100).format("$0,0.00")
    return (
        <div className="expense-summary">
            Viewing {summaryCount} totalling {summaryTotal}
        </div>
    )
}

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: getVisibleExpenses(expenses, filters)
})

export default connect(mapStateToProps)(ExpenseSummary)

