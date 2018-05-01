import React from "react"
import createHistory from "history/createBrowserHistory"
import {
	Router,
	Link,
	NavLink,
	Route,
	Switch
} from "react-router-dom"

import {
	AddExpensePage,
	EditExpensePage,
	ExpenseDashboardPage,
	LoginPage,
	NotFoundPage
} from "../components"

import { PrivateRoute, PublicRoute } from "./"

export const history = createHistory()

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
				<PrivateRoute path="/create" component={AddExpensePage} />
				<PrivateRoute path="/edit/:id" component={EditExpensePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
)

export default AppRouter