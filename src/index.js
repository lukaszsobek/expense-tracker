import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import "./styles/styles.scss"

import AppRouter from "./routers/AppRouter"
import configureStore from "./store"

import {
    addExpense,
    editExpense,
    removeExpense,
    setEndDateFilter,
    setStartDateFilter,
    setTextFilter,
    sortByAmount,
    sortByDate
} from "./actions"

import { getVisibleExpenses} from "./selectors"

const store = configureStore()

// store.subscribe(() => {
//     const { expenses, filters } = store.getState()
//     console.log(getVisibleExpenses(expenses, filters))
// })

const addedItem2 = store.dispatch(addExpense({
    description: "lalala",
    amount : 300,
    createdAt: 400
}))

const addedItem = store.dispatch(addExpense({
    description: "Hello",
    amount : 100,
    createdAt: 80
}))

// store.dispatch(removeExpense({
//     id: addedItem.expense.id
// }))
// store.dispatch(editExpense(
//     addedItem2.expense.id,
//     { 
//         amount: 500,
//         description: "not-lalala"
//      }
// ))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDateFilter(125))
// store.dispatch(setEndDateFilter(300))
// store.dispatch(setStartDateFilter())
// store.dispatch(setEndDateFilter())

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.querySelector("#container")
)