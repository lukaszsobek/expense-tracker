import React from "react"

class ExpenseForm extends React.Component {
    state = {
        description: "",
        note: "",
        amount: ""
    }

    onDescriptionChange = e => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = e => {
        const amount = e.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = e => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

  render() {
      return (
        <div>
            <form>
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

                <textarea
                    placeholder="Add a note to your expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    ></textarea>

                <button>Add Expense</button>
            </form>
        </div>
      )
  }  
}

export default ExpenseForm