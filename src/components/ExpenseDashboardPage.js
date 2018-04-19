import React from "react"

import { ExpenseList, ExpenseListFilters, ExpenseSummary } from "./"

export const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />        
    </div>
)

export default ExpenseDashboardPage