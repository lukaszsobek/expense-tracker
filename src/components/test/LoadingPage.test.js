import React from "react"
import { shallow } from "enzyme"

import { LoadingPage } from "../"

test("Renders loading screen", () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})