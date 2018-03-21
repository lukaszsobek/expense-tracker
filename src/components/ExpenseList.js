import React from "react"
import { connect } from "react-redux"

import ExpenseListItem from "./ExpenseListItem"
import { getVisibleExpenses} from "../selectors"
import { removeExpense } from "../actions"


const ExpenseList = ({ expenses, deleteItem }) => (
    <div>
        {expenses.map(expense => (
            <ExpenseListItem
            key={expense.id}
            deleteItem={deleteItem}
            {...expense}
            />
        ))}
    </div>
)


const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

const mapDispatchToProps = dispatch => ({
    deleteItem: (item) => dispatch(removeExpense(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList)
