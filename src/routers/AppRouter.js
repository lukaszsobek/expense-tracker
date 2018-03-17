import React from "react";
import {
    BrowserRouter,
    Link,
    NavLink,
    Route,
    Switch
} from "react-router-dom";

import {
    AddExpensePage,
    EditExpensePage,
    ExpenseDashboardPage,
    HelpPage,
    NotFoundPage
} from "../components"


const Header = () => (
    <div>
        Expense Tracker
        <p>
            <NavLink activeClassName="nav__link--active" to="/" exact={true}>Dashboard</NavLink> -
            <NavLink activeClassName="nav__link--active" to="/create">Add Expense</NavLink> -
            <NavLink activeClassName="nav__link--active" to="/edit">Edit Expense</NavLink> -
            <NavLink activeClassName="nav__link--active" to="/help">Help</NavLink>
        </p>
    </div>
);

const AppRouter = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;