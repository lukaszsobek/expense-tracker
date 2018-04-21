import setExpenses from "../setExpenses"

test("setExpenses creates desired object", () => {
    const testData = {1: "adsds", df: "rieqwroweipo"}
    expect(setExpenses(testData)).toEqual({
        "expenses": testData,
        "type": "SET_EXPENSES"
    })
})