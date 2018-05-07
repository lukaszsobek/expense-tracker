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
            <Link
                className="expense-list__item"
                to={`/edit/${id}`}
            >

                <div>
                    <span
                        className="expense-list__item--desc"
                    >{description}</span><br/>
                    <span
                        className="expense-list__item--time"
                    >{momentString}</span>
                </div>

                <div>
                    <span
                        className="expense-list__item--amount"
                    >{amountString}</span>
                </div>
                
            </Link>
        )
}

export default ExpenseListItem