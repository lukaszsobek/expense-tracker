import {
    applyMiddleware,
    createStore,
    combineReducers
} from "redux"

import thunk from "redux-thunk"

import {
    expensesReducer,
    filtersReducer,
    authReducer
} from "../reducers"

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    )
    return store
}