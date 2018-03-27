import { getSingleExpense } from "../"

describe("getSingleExpense",() => {

    const expenses = [
        {id: "3",a: "a"}, {id: "2",b: "b"}, {id: "8",c: "c"}
    ]

    it("gets the right expense",() => {
        const id = "2"
        expect(getSingleExpense(expenses, id)).toEqual({ 
            "b": "b", id
        })
    })

    it("returns no results",() => {
        const id = "9"
        expect(getSingleExpense(expenses, id)).toBeUndefined()
    })
})



// const getSingleExpense = (expenses, id) => {
//     return expenses.filter(expense => expense.id === id)[0]
// }

// export default getSingleExpense