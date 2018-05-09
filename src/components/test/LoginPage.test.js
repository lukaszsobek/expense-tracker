import React from "react"
import { shallow } from "enzyme"

import { LoginPage } from "../LoginPage"

describe("LoginPage",() => {

    it("renders",() => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper).toMatchSnapshot()
    })

    it("calls correct function on login",() => {
        const startLoginSpy = jest.fn()
        const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>)
        wrapper.find("button").simulate("click")
        expect(startLoginSpy).toBeCalled()
    })

})
