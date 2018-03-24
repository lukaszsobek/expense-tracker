import React from "react"
import { Link } from "react-router-dom"

const ExpenseListItem = ({
        id, description, history, amount, createdAt
    }) => {
    return (
        <div>
            <div>
            <Link to={`/edit/${id}`}>{description}</Link>
             - {amount}
            - {createdAt}
            </div>
        </div>
    )
}

export default ExpenseListItem