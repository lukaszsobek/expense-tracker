import React from "react"
import { shallow } from "enzyme"
import moment from "moment"

import { ExpenseForm } from "../"

const testExpense = {
    description: "testDesc",
    note: "testNote",
    amount: 200,
    createdAt: 0,
}

describe("Expense form renders",() => {

    it("default component",() => {
        const wrapper = shallow(<ExpenseForm />)
        expect(wrapper).toMatchSnapshot()
    })

    it("a component with data provided",() => {
        
        const wrapper = shallow(<ExpenseForm editedExpense={testExpense} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe("Expense form reponds to ",() => {
    
    it("description input",() => {
        const wrapper = shallow(<ExpenseForm />)
        const value = "testValue"
        wrapper
            .find(".expense-form__description")
            .simulate("change",{
                target: { value }
            })
            expect(wrapper.state("description")).toBe(value)
    })

    it("note input",() => {
        const wrapper = shallow(<ExpenseForm />)
        const value = "testValue"
        wrapper
            .find(".expense-form__note")
            .simulate("change",{
                target: { value }
            })
            expect(wrapper.state("note")).toBe(value)
    })

    it("amount input",() => {
        const wrapper = shallow(<ExpenseForm />)
        const value = "80.75"
        wrapper
            .find(".expense-form__amount")
            .simulate("change",{
                target: {value }
            })
        expect(wrapper.state("amount")).toBe(value)
    })

    it("invalid amount",() => {
        const wrapper = shallow(<ExpenseForm />)
        const value = "testString.00"
        wrapper
            .find(".expense-form__amount")
            .simulate("change",{
                target: { value }
            })
        expect(wrapper.state("amount")).toBe("")
    })

    it("error on invalid submission",() => {
        const wrapper = shallow(<ExpenseForm />)
        wrapper.find("form").simulate("submit",{
            preventDefault: () => null
        })
        expect(wrapper.state().errorState).toBe(true)
    })

    it("submission with valid data",() => {
        const onSubmitSpy = jest.fn()
        const wrapper = shallow(
            <ExpenseForm
                editedExpense={testExpense}
                onSubmit={onSubmitSpy}
                />
        )
        wrapper.find("form").simulate("submit",{
            preventDefault: () => null 
        })
        expect(onSubmitSpy).toHaveBeenCalledWith(testExpense)
    })

    it("date change",() => {
        const now = moment(0)
        const wrapper = shallow(<ExpenseForm />)
        wrapper
            .find("withStyles(SingleDatePicker)")
            .prop("onDateChange")(now)

        expect(wrapper.state("createdAt")).toBe(now)
    })

    it("date focus change",() => {
        const focused = true
        const wrapper = shallow(<ExpenseForm />)
        wrapper
            .find("withStyles(SingleDatePicker)")
            .prop("onFocusChange")({ focused })
        expect(wrapper.state("isDateFocused")).toBe(focused)
    })

})