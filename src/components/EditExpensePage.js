import React from "react"
import { connect } from "react-redux"
import { ExpenseForm } from "./"

import { editExpense, removeExpense } from "../actions"
import { getSingleExpense } from "../selectors"

export class EditExpensePage extends React.Component {

    onClick = () => {
        const { editedExpense, removeExpense, history } = this.props
        removeExpense(editedExpense)
        history.push("/")
    }

    onSubmit = expense => {
        const { editExpense, editedExpense, history } = this.props
        editExpense(editedExpense.id, expense)
        history.push("/")
    }

    render() {
        const { editedExpense } = this.props
        return (
            <div>
                <h1>Edit expense</h1>
                <ExpenseForm
                    editedExpense={editedExpense}
                    onSubmit={this.onSubmit}
                    />
                <button
                    onClick={this.onClick}
                >Remove</button>
            </div>
        )
    }
}

const mapStateToProps = ({ expenses }, props) => ({
    editedExpense: getSingleExpense(expenses, props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    removeExpense: expense => dispatch(removeExpense(expense)),
    editExpense: (id,expense) => dispatch(editExpense(id,expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)