import {
    applyMiddleware,
    createStore,
    combineReducers
} from "redux"

import thunk from "redux-thunk"

import { expensesReducer, filtersReducer} from "../reducers"

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
    )
    return store
}