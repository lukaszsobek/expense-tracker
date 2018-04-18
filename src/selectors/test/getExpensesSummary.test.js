import { getExpensesSummary } from "../index"

describe("getExpenseSummary",() => {
    it("sums up 0 expenses", () => {
        const result = {
            count: 0,
            total: 0
        }
        expect(getExpensesSummary()).toEqual(result)
    })

    it("sums up 1 expenses", () => {
        const expenses = [
            { amount: 123 }
        ]
        const result = {
            count: 1,
            total: 123
        }
        expect(getExpensesSummary(expenses)).toEqual(result)        
    })

    it("sums up 3 expenses", () => {
        const expenses = [
            { amount: 123 },
            { amount: 123 },
            { amount: 123 }
        ]
        const result = {
            count: 3,
            total: 369
        }
        expect(getExpensesSummary(expenses)).toEqual(result)          
    })
})