import { setTextFilter } from "../../"

test("textFilter creates action", () => {
    const props = "testText"
    expect(setTextFilter(props)).toEqual({
        "text": "testText",
        "type": "SET_TEXT_FILTER"
    })
})
