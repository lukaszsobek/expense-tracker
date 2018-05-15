import React from "react"
import { connect } from "react-redux"

import { expenses } from "../firebase"
import { ExpenseList, ExpenseListFilters, ExpenseSummary } from "./"
import { setExpenses } from "../actions"

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