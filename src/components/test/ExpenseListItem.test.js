import React from "react"
import { shallow } from "enzyme"

import { ExpenseListItem } from "../ExpenseListItem"

test("Renders ExpenseListItem", () => {
        const props = {
            id: "1", description: "2", history: "3", amount: "4", createdAt: 0
        }
        const wrapper = shallow(<ExpenseListItem {...props} />)
        expect(wrapper).toMatchSnapshot()
})