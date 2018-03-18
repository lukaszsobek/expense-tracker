import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
    <div>
        Expense Tracker
        <p>
            <NavLink activeClassName="nav__link--active" to="/" exact={true}>Dashboard</NavLink> -
            <NavLink activeClassName="nav__link--active" to="/create">Add Expense</NavLink> -
            <NavLink activeClassName="nav__link--active" to="/help">Help</NavLink>
        </p>
    </div>
)

export default Header