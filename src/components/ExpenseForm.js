import React from "react"
import { connect } from "react-redux"
import moment from "moment"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

import { addExpense } from "../actions/expenses/addExpense"

const ErrorMessage = ({ errorMessage }) => (
    errorMessage
        ? <div className="error-message">Missing description or amount</div>
        : null
)

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        const editedExpense = props.editedExpense
        this.state = {
            description: !!editedExpense
                ? editedExpense.description
                : "",
            note: !!editedExpense
                ? editedExpense.note
                : "",
            amount: !!editedExpense
                ? (editedExpense.amount / 100).toString()
                : "",
            createdAt: !!editedExpense
                ? moment(editedExpense.createdAt) : moment(),
            isDateFocused: false,
            errorState: false
        }
    }

    onDescriptionChange = e => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = e => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = createdAt => {
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ isDateFocused: focused }))
    }

    onNoteChange = e => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onSubmitForm = e => {
        e.preventDefault()
        const { amount, description, createdAt, note } = this.state
        const { onSubmit } = this.props

        if(!description || !amount) {
             return this.setState(() => ({ errorState: true })) 
        }

        onSubmit({
            amount: parseFloat(amount, 10) * 100,
            description,
            createdAt: createdAt.valueOf(),
            note
        })
    }

  render() {
      return (
        <div>
            <ErrorMessage errorMessage={this.state.errorState} />
            <form onSubmit={this.onSubmitForm}>
                <input type="test" 
                    placeholder="Description..."
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    autoFocus
                    />

                <input type="number" 
                    placeholder="Amount..."
                    pattern="[0-9]+([\.,][0-9]+)?"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.isDateFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />

                <textarea
                    placeholder="Add a note to your expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    ></textarea>

                <button>{
                    !!this.props.editedExpense
                        ? "Edit expense"
                        : "Add Expense"
                }</button>
            </form>
        </div>
      )
  }  
}

export default ExpenseForm