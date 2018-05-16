import { removeExpenseApp } from "../../"

describe("removeExpense creates", () => {
    it("removeExpenseApp action", () => {
        const id = 5
        expect(removeExpenseApp(id)).toEqual({
            id,
            "type": "REMOVE_EXPENSE"
        })
    })
})