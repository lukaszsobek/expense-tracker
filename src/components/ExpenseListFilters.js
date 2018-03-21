import React from "react"
import { connect } from "react-redux"
import { setTextFilter } from "../actions"

const ExpenseListFilters = ({
    textFilter, updateTextFilter
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
        </div>
    )
}

const mapStateToProps = state => ({
    textFilter: state.filters.text
})

const mapDispatchToProps = dispatch => ({
    updateTextFilter: (newValue) => dispatch(setTextFilter(newValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)