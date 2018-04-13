import React from "react"
import { shallow } from "enzyme"
import moment from "moment"

import { ExpenseListFilters } from "../ExpenseListFilters"

describe("ExpenseListFilters",() => {

    it("renders",() => {
        const wrapper = shallow(<ExpenseListFilters />)
        expect(wrapper).toMatchSnapshot()
    })

    it("sets correct start and end date", () => {
        const startDate = moment(0)
        const setStartDateFilterSpy = jest.fn()
        const endDate = moment(0).add(3,"days")
        const setEndDateFilterSpy = jest.fn()
        
        const wrapper = shallow(
            <ExpenseListFilters
                setStartDateFilter={setStartDateFilterSpy}
                setEndDateFilter={setEndDateFilterSpy}
                />
        )

        wrapper
            .find("withStyles(DateRangePicker)")
            .prop("onDatesChange")({ startDate, endDate })
        
        expect(setStartDateFilterSpy).toHaveBeenCalledWith(startDate)
        expect(setEndDateFilterSpy).toHaveBeenCalledWith(endDate)
        
    })

    it("sets calendar focus", () => {
        const startDate = "startDate"
        const wrapper = shallow(
            <ExpenseListFilters
            />
        )
        wrapper
            .find("withStyles(DateRangePicker)")
            .prop("onFocusChange")(startDate)
        expect(wrapper.state("calendarFocused")).toEqual(startDate)

    })

    it("sets filter text",() => {
        const textFilter = "testChange"
        const setTextFilterSpy = jest.fn()
        const wrapper = shallow(
            <ExpenseListFilters setTextFilter={setTextFilterSpy} />
        )
        wrapper.find("input").simulate("change",{
            target: { value: textFilter }
        })
        expect(setTextFilterSpy).toHaveBeenCalledWith(textFilter)
    })

    it("sets sort value", () => {
        const sortValue = "testValue"
        const sortBySpy = jest.fn()
        const wrapper = shallow(
            <ExpenseListFilters sortBy={sortBySpy} />
        )
        wrapper.find("select").simulate("change",{
            target: { value: sortValue }
        })
        expect(sortBySpy).toHaveBeenCalledWith(sortValue)
    })
})
