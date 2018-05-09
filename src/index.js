import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"

import { AppRouter, history } from "./routers"
import configureStore from "./store"
import { logIn, logOut, setExpenses } from "./actions"
import { firebase, expenses } from "./firebase"
import { LoadingPage } from "./components"


const store = configureStore()

ReactDOM.render(
    <LoadingPage />,
    document.querySelector("#container")
)

let hasRendered = false
const renderApp = () => {

    const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )

    if(!hasRendered) {
        hasRendered = !!hasRendered
        ReactDOM.render(jsx, document.querySelector("#container"))
    }
}

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        store.dispatch(logIn(user.uid))
        const expensesList = []

        expenses.once("value").then(items => {
            items.forEach(item => {
                expensesList.push({
                    id: item.key,
                    ...item.val()
                })
            })
        })
        .then(() => setExpenses(expensesList))
        .then(() => {
            renderApp()
            if(history.location.pathname === "/") {
                history.push("/dashboard")
            }
        })
    } else {
        store.dispatch(logOut())
        renderApp()
        history.push("/")
    }
})

