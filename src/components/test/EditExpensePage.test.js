import React from "react"
import { shallow } from "enzyme"

import { EditExpensePage } from "../EditExpensePage"

const testExpense = {
    description: "testDesc",
    note: "testNote",
    amount: 200,
    createdAt: 0,
}

describe("EditExpensePage", () => {

    let editExpenseSpy, removeExpenseSpy, historySpy, wrapper

    beforeEach(() => {
        editExpenseSpy = jest.fn()
        removeExpenseSpy = jest.fn()
        historySpy = {
            push: jest.fn()
        }
        wrapper = shallow(
            <EditExpensePage
                editedExpense={testExpense}
                editExpense={editExpenseSpy}
                removeExpense={removeExpenseSpy}
                history={historySpy}
            />
        )
    })

    it("renders Component with data",() => {
        expect(wrapper).toMatchSnapshot()
    })

    it("removes item on click",() => {
        wrapper.find("button").simulate("click")
        expect(removeExpenseSpy).toBeCalledWith(testExpense)
        expect(historySpy.push).toBeCalledWith("/")
    })

    it("submits item",() => {
        wrapper.find("ExpenseForm").prop("onSubmit")(testExpense)
        expect(editExpenseSpy).toBeCalledWith(testExpense.id,testExpense)
        expect(historySpy.push).toBeCalledWith("/")
    })


})