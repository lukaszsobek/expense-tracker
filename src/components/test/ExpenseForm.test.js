import React from "react"
import { shallow } from "enzyme"

import { ExpenseForm } from "../"

describe("Expense form renders",() => {
    it("default component",() => {
        const wrapper = shallow(<ExpenseForm />)
        expect(wrapper).toMatchSnapshot()
    })

    it("a component with data provided",() => {
        const editedExpense = {
            description: "testDesc",
            note: "testNote",
            amount: 200,
            createdAt: 0,
        }
        const wrapper = shallow(<ExpenseForm editedExpense={editedExpense} />)
        expect(wrapper).toMatchSnapshot()
    })
})