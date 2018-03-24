import { removeExpense } from "../../"

describe("removeExpense creates", () => {
    it("remove expense action", () => {
        const props = {id: 5}
        expect(removeExpense(props)).toEqual({
            "id": 5,
            "type": "REMOVE_EXPENSE"
        })
    })
})