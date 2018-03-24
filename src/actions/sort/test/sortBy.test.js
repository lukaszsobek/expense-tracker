import { sortBy } from "../../"

test("sortBy creates action",() => {
    const props = "testValue"
    expect(sortBy(props)).toEqual({
        "type": "SORT_BY",
        "value": "testValue"
    })
})
