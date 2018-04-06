import { addExpense, addExpenseApp } from "../../"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

describe("addExpenseApp returns action",() => {
    it("with custom properties",() => {

        const expense = {
            "id": 987,
            "amount": 123,
            "createdAt": 456,
            "description": "gfsdgdfg",
            "note": "45454645"
        }
        expect(addExpenseApp(expense)).toEqual({
            expense, 
            "type": "ADD_EXPENSE"
        })
    })
})

describe("addExpense submits", () => {

    const createMockStore = configureMockStore([thunk])

    it("with default props",(done) => {
        const store = createMockStore({})
        const props = {
            "amount": 0,
            "createdAt": 0,
            "description": "",
            "note": "",
        }
        store
            .dispatch(addExpense())
            .then(() => {
                const actions = store.getActions()
                expect(actions.length).toBe(1)
                expect(actions[0]).toEqual({
                    type: "ADD_EXPENSE",
                    expense: {
                        ...props,
                        id: expect.any(String)
                    }
                })
                done()
            })
    })


    it("with custom props",(done) => {
        const store = createMockStore({})
        const props = {
            "amount": 123,
            "createdAt": 456,
            "description": "gfsdgdfg",
            "note": "45454645"
        }
        store
            .dispatch(addExpense(props))
            .then(() => {
                const actions = store.getActions()
                expect(actions.length).toBe(1)
                expect(actions[0]).toEqual({
                    type: "ADD_EXPENSE",
                    expense: {
                        ...props,
                        id: expect.any(String)
                    }
                })
                done()
            })
    })
})