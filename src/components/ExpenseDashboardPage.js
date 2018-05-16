import React from "react"
import { connect } from "react-redux"

import { ExpenseList, ExpenseListFilters, ExpenseSummary } from "./"

export const ExpenseDashboardPage = ({ expenses }) => {

    return(
        <div className="app-body">
            <ExpenseSummary />
            <ExpenseListFilters />
            <ExpenseList expenses={expenses} />
        </div>
    )
}

const mapStateToProps = ({ expenses }) => ({ expenses })

export default connect(mapStateToProps)(ExpenseDashboardPage)