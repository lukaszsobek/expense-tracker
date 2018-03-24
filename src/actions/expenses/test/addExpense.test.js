import { addExpense } from "../../"

describe("addExpense returns action",() => {
    it("with default properties",() => {
        expect(addExpense()).toEqual({
            "expense": {
                "amount": 0,
                "createdAt": 0,
                "description": "",
                "id": expect.any(String),
                "note": ""
            }, 
            "type": "ADD_EXPENSE"}
        )
    })

    it("with custom properties",() => {

        const props = {
            "amount": 123,
            "createdAt": 456,
            "description": "gfsdgdfg",
            "note": "45454645"
        }
        expect(addExpense(props)).toEqual({
            "expense": {
                "amount": 123,
                "createdAt": 456,
                "description": "gfsdgdfg",
                "id": expect.any(String),
                "note": "45454645"
            }, 
            "type": "ADD_EXPENSE"}
        )
    })
})