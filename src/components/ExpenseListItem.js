import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import numeral from "numeral"

export const ExpenseListItem = ({
        id, description, history, amount, createdAt
    }) => {
        const momentString = moment(createdAt).format("MMM Do, YYYY")
        const amountString = numeral(amount / 100).format("$0,0.00")
        
        return (
            <div>
                <div>
                <Link to={`/edit/${id}`}>{description}</Link>
                    - {amountString}
                    - {momentString}
                </div>
            </div>
        )
}

export default ExpenseListItem