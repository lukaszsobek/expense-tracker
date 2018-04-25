import React from "react"
import { shallow } from "enzyme"

import { LoginPage } from "../"

test("LoginPage",() => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})