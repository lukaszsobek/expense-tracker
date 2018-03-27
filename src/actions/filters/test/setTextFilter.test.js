import { setTextFilter } from "../../"


describe("textFilter creates",() => {
    test(" custom action", () => {
        const props = "testText"
        expect(setTextFilter(props)).toEqual({
            "text": "testText",
            "type": "SET_TEXT_FILTER"
        })
    })
    
    test("default action", () => {
        expect(setTextFilter()).toEqual({
            "text": "",
            "type": "SET_TEXT_FILTER"
        })
    })
})

