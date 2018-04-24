import { editExpenseApp } from "../../"

describe("editExpenseApp creates", () => {
    it("edit expense action", () => {
        const id = 1
        const update = "two"

        expect(editExpenseApp(id, update)).toEqual({
            "id": 1,
            "type": "EDIT_EXPENSE",
            "update": "two"
        })
    })
})
