import React from "react"

import { ExpenseList, ExpenseListFilters } from "./"

export const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />        
    </div>
)

export default ExpenseDashboardPage