import moment from "moment"

import { getVisibleExpenses } from "../"

describe("getVisibleExpenses returns",() => {

    const expenses = [
        {
            description: "testi",
            note: "filler",
            amount: 300,
            createdAt: moment(0)
        }, {
            description: "filler",
            note: "blalala",
            amount: 100,
            createdAt: moment(0).subtract(3, "days")
        }, {
            description: "atest",
            note: "lalamoo",
            amount: 200,
            createdAt: moment(0).add(3, "days")
        }   
    ]

    it("text matches in description", () => {
        const filters = {text: "TEst"}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[0], expenses[2]
        ])
    })

    it("text matches in note", () => {
        const filters = {text: "laLA"}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[1], expenses[2]
        ])
    })

    it("text matches in desc and note", () => {
        const filters = {text: "fiLL"}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[1], expenses[0]
        ])
    })

    it("date matches after start date ",() => {
        const filters = {startDate: moment(0).subtract(1, "days")}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[0], expenses[2]
        ])
    })

    it("date matches before end date ",() => {
        const filters = {endDate: moment(0).add(1, "days")}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[1], expenses[0]
        ])
    })

    it("sorts by date by default", () => {
        const filters = {}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[1], expenses[0], expenses[2]
        ])
    })

    it("sorts by amount", () => {
        const filters = {sortBy: "amount"}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[0], expenses[2], expenses[1]
        ])
    })   

    it("sorts by date", () => {
        const filters = {sortBy: "date"}
        expect(getVisibleExpenses(expenses, filters)).toEqual([
            expenses[1], expenses[0], expenses[2]
        ])
    })
})