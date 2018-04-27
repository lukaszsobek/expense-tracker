import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"

import "./firebase"

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

import { firebase } from "./firebase"
import { getVisibleExpenses } from "./selectors"

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.querySelector("#container")
)

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        console.log("logged in",user.displayName)
    } else {
        console.log("not logged in")
    }
})