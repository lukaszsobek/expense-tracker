import { expensesReducer } from "../"

describe("expenseReducer handles",() => {

    it("initialization", () => {
        const state = []
        const action = { type: "@@INIT" }
        expect(expensesReducer(undefined,action)).toEqual(state)       
    })

    it("default action", () => {
        const state = []
        const action = {}
        expect(expensesReducer(state,action)).toEqual(state)   
    })

    it("ADD_EXPENSE", () => {
        const state = []
        const expense = 1
        const action = { type: "ADD_EXPENSE", expense }
        expect(expensesReducer(state,action)).toEqual([expense])
    })

    it("REMOVE_EXPENSE when no match", () => {
        const state = [{id:1},{id:2},{id:3}]
        const id = 8
        const action = { type: "REMOVE_EXPENSE", id }
        expect(expensesReducer(state,action)).toEqual(state)
    })

    it("REMOVE_EXPENSE when match", () => {
        const state = [{id:1},{id:2},{id:3}]
        const id = 2
        const action = { type: "REMOVE_EXPENSE", id }
        expect(expensesReducer(state,action)).toEqual([
            {"id": 1}, {"id": 3}
        ])
    })

    it("EDIT_EXPENSE when no match", () => {
        const state = [{id:1},{id:2}]
        const update = {id: 3, update: {test: "yep"}}
        const action = { type: "EDIT_EXPENSE", update }
        expect(expensesReducer(state,action)).toEqual(state)
    })

    it("EDIT_EXPENSE when match", () => {
        const state = [{id:1},{id:2}]
        const update = {test: "yep"}
        const action = { type: "EDIT_EXPENSE",id: 2, update }
        expect(expensesReducer(state,action)).toEqual([
            {"id": 1}, {"id": 2, "test": "yep"}
        ])
    })

    it("SET_EXPENSES to state", () => {
        const state = []
        const newItems = [{id:3},{id:4}]
        const action = { type: "SET_EXPENSES", expenses: newItems }
        expect(expensesReducer(state,action)).toEqual(newItems)
    })
})
