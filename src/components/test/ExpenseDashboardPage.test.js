import React from "react"
import { shallow } from "enzyme"

import { ExpenseDashboardPage } from "../ExpenseDashboardPage"

test("Renders ExpenseDashboardPage", () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})