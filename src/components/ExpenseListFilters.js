import React from "react"
import { connect } from "react-redux"
import { DateRangePicker } from "react-dates"

import "react-dates/initialize"
import {
    setTextFilter,
    setStartDateFilter,
    setEndDateFilter,
    sortBy
} from "../actions"

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDateFilter(startDate)
        this.props.setEndDateFilter(endDate)
    }

    onFocusChange = calendarFocused => this.setState(() => ({ calendarFocused }))

    onTextChange = e => this.props.setTextFilter(e.target.value)

    onSortChange = e => this.props.sortBy(e.target.value)
    
    render() {
        const { endDate, startDate, textFilter } = this.props
        return (
            <div>
                <input
                    type="text"
                    value={textFilter}
                    onChange={this.onTextChange}
                />
                <select onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={startDate} // momentPropTypes.momentObj or null,
                    startDateId="expense-list__filter--start-date" // PropTypes.string.isRequired,
                    endDate={endDate} // momentPropTypes.momentObj or null,
                    endDateId="expense-list__filter--end-date" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ filters }) => ({
    textFilter: filters.text,
    startDate: filters.startDate,
    endDate: filters.endDate
})

const mapDispatchToProps = dispatch => ({
    setTextFilter: newValue => dispatch(setTextFilter(newValue)),
    sortBy: value => dispatch(sortBy(value)),
    setStartDateFilter: startDate => dispatch(setStartDateFilter(startDate)),
    setEndDateFilter: endDate => dispatch(setEndDateFilter(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)