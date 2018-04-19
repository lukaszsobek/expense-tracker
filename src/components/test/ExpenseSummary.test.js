import React from "react"
import { ExpenseSummary } from "../ExpenseSummary"
import { shallow } from "enzyme"

describe("ExpenseSummary renders",() => {
    it("with 0 expenses",() => {
        const wrapper = shallow(<ExpenseSummary />)
        expect(wrapper).toMatchSnapshot()
    })

    it("with 1 expense",() => {
        const expenses = [
            {amount: 10}
        ]
        const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("with 3 expenses",() => {
        const expenses = [
            {amount: 10},
            {amount: 20},
            {amount: 30}
        ]
        const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
        expect(wrapper).toMatchSnapshot()
    })
})
