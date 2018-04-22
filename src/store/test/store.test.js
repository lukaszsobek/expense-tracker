import store from "../"

describe("Store",() => {

    it("has correct initial state",() => {
        expect(store().getState()).toMatchSnapshot()
    })
})