import React from "react"

const ExpenseListItem = ({
        deleteItem, id, description, amount, createdAt
    }) => {
    return (
        <div>
            <div>
            {description} - {amount} - {createdAt}
            </div>
            <button
                onClick={() => deleteItem({id})}
            >Remove</button>
        </div>
    )
}

export default ExpenseListItem