import React from "react"
import { Link } from "react-router-dom"

const ExpenseListItem = ({
        deleteItem, id, description, history, amount, createdAt
    }) => {
    return (
        <div>
            <div>
            <Link to={`/edit/${id}`}>{description}</Link>
             - {amount}
            - {createdAt}
            </div>

            <button
                onClick={() => deleteItem({id})}
            >Remove</button>
        </div>
    )
}

export default ExpenseListItem