import React from "react"
import { connect } from "react-redux"
import moment from "moment"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"

const ErrorMessage = ({ errorMessage }) => (
    errorMessage
        ? <div className="expense-form__error-message">Missing description or amount</div>
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
        <form className="expense-form" onSubmit={this.onSubmitForm}>
        <ErrorMessage errorMessage={this.state.errorState} />

            <input type="test" 
                className="expense-form__description text-input"
                placeholder="Description..."
                value={this.state.description}
                onChange={this.onDescriptionChange}
                autoFocus
                />

            <input type="number" 
                className="expense-form__amount text-input"
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
                className="expense-form__note textarea"
                value={this.state.note}
                onChange={this.onNoteChange}
                ></textarea>

            <div>
                <button
                    className="expense-form__submit-button"
                >{
                    !!this.props.editedExpense
                        ? "Edit expense"
                        : "Add Expense"
                }</button>
            </div>
        </form>
      )
  }  
}

export default ExpenseForm