import { setEndDateFilter } from "../../"

test("setEndDateFilter returns action",() => {
    const props = "testValue"
    expect(setEndDateFilter(props)).toEqual({
        "date": "testValue",
        "type": "SET_END_DATE_FILTER"
    })
})
