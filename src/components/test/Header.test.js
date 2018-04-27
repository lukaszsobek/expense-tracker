import React from "react"
import { shallow } from "enzyme"

import { Header }  from "../Header"

describe("Header",() => {
    it("renders",() => {
        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    })
    it("calls correct function on logout",() => {
        const startLogoutSpy = jest.fn()
        const wrapper = shallow(<Header startLogout={startLogoutSpy} />)
        wrapper.find("button").simulate("click")
        expect(startLogoutSpy).toBeCalled()
    })
})