import React from "react"
import { connect } from "react-redux"

import ExpenseListItem from "./ExpenseListItem"
import { getVisibleExpenses} from "../selectors"


const ExpenseList = props => {
    return(
        <div>
            {props.expenses.map(expense => (
                <ExpenseListItem
                key={expense.id}
                description={expense.description}
                amount={expense.amount}
                createdAt={expense.createdAt}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
            expenses: getVisibleExpenses(state.expenses, state.filters)
        }

}


// old
// const mapStateToProps = state => ({
//     expenses: state.expenses,
//     filters: state.filters
// })

export default connect(mapStateToProps)(ExpenseList)
