import { removeExpenseApp } from "../../"

describe("removeExpense creates", () => {
    it("removeExpenseApp action", () => {
        const props = {id: 5}
        expect(removeExpenseApp(props)).toEqual({
            "id": 5,
            "type": "REMOVE_EXPENSE"
        })
    })
})