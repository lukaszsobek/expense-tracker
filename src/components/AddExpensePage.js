import React from "react"
import { connect } from "react-redux"
import { ExpenseForm } from "./"

import { addExpense } from "../actions"

export class AddExpensePage  extends React.Component {

    onSubmit = expense => {
        this.props.addExpense(expense)
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="app-container">
                        Add Expense
                    </div>
                </div>

                <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage)