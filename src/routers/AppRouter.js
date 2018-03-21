import React from "react"
import {
	BrowserRouter,
	Link,
	NavLink,
	Route,
	Switch
} from "react-router-dom"

import {
	AddExpensePage,
	EditExpensePage,
	ExpenseDashboardPage,
	Header,
	HelpPage,
	NotFoundPage
} from "../components"



const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter