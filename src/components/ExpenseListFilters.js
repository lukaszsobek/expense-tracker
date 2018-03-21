import React from "react"
import { connect } from "react-redux"
import { setTextFilter, sortBy } from "../actions"

const ExpenseListFilters = ({
    textFilter, sortBy, updateTextFilter
    }) => {
    return (
        <div>
            <input
                type="text"
                value={textFilter}
                onChange={(e) => {
                    updateTextFilter(e.target.value)
                    }
                }
            />
            <select onChange={(e) => sortBy(e.target.value)}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => ({
    textFilter: state.filters.text
})

const mapDispatchToProps = dispatch => ({
    updateTextFilter: newValue => dispatch(setTextFilter(newValue)),
    sortBy: value => dispatch(sortBy(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)