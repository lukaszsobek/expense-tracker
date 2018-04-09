import React from "react"
import { shallow } from "enzyme"

import { AddExpensePage } from "../AddExpensePage"

const testExpense = {
    description: "testDesc",
    note: "testNote",
    amount: 200,
    createdAt: 0,
}

describe("AddExpensePage",() => {
    it("renders component",() => {
        const wrapper = shallow(<AddExpensePage />)
        expect(wrapper).toMatchSnapshot()
    })

    it("submits component",() => {
        const addExpenseSpy = jest.fn()
        const historySpy = {
            push: jest.fn()
        }
        const wrapper = shallow(<AddExpensePage 
            addExpense={addExpenseSpy}
            history={historySpy}
            />)
        wrapper.find("ExpenseForm").prop("onSubmit")(testExpense)
        expect(addExpenseSpy).toHaveBeenCalledWith(testExpense)
        expect(historySpy.push).toHaveBeenCalledWith("/")
    })
})
