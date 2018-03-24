import { editExpense } from "../../"

describe("editExpense creates", () => {
    it("edit expense action", () => {
        const id = 1
        const update = "two"

        expect(editExpense(id, update)).toEqual({
            "id": 1,
            "type": "EDIT_EXPENSE",
            "update": "two"
        })
    })
})
