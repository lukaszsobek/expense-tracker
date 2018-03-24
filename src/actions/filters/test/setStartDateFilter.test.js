import { setStartDateFilter } from "../../"

test("setStartDateFilter returns action",() => {
    const props = "testValue"
    expect(setStartDateFilter(props)).toEqual({
        "date": "testValue",
        "type": "SET_START_DATE_FILTER"
    })
})
