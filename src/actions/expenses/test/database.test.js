import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import { addExpense } from "../../"

const createMockStore = configureMockStore([thunk])

describe("Expense database actions", () => {

    const auth = { uid: "testUser" }
    const store = createMockStore({ auth })

    it("Add an expense", (done) => {
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
})

