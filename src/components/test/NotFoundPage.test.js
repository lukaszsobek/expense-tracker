import React from "react"
import { shallow } from "enzyme"

import { NotFoundPage } from "../NotFoundPage"

test("Renders NotFoundPage", () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})
