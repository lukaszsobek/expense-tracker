import React from "react"
import { connect } from "react-redux"
import numeral from "numeral"

import { getExpensesSummary, getVisibleExpenses } from "../selectors"

export const ExpenseSummary = ({ expenses }) => {
    const { count, total } = getExpensesSummary(expenses)
    return (
        <div className="expense-summary">
            Viewing {count === 1 ? "1 expense " : `${count} expenses `}
             totalling {numeral(total / 100).format("$0,0.00")}
        </div>
    )
}

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: getVisibleExpenses(expenses, filters)
})

export default connect(mapStateToProps)(ExpenseSummary)

