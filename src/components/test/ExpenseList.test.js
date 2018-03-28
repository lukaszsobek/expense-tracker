import React from "react"
import { shallow } from "enzyme"

import { ExpenseList } from "../ExpenseList"

describe("Renders ExpenseList",() => {

    it("renders without expenses",() => {
        const wrapper = shallow(<ExpenseList />)
        expect(wrapper).toMatchSnapshot()
    })

    it("renders with expenses",() => {
        const expenses = [
            {id:1, test: "test"},
            {id:2, blue: "green"},
            {id:3, isLast: true}
        ]

        const wrapper = shallow(<ExpenseList expenses={expenses} />)
        expect(wrapper).toMatchSnapshot()
    })
})