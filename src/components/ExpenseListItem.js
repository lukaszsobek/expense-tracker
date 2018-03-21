import React from "react"

const ExpenseListItem = ({ description, amount, createdAt }) => {
    return (
        <div>
         {description} - {amount} - {createdAt}
        </div>
    )
}

export default ExpenseListItem