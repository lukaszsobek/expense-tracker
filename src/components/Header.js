import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

import { startLogout } from "../actions"

export const Header = ({ startLogout }) => (
    <div>
        Expense Tracker
        <p>
            <NavLink activeClassName="nav__link--active" to="/" exact={true}>Dashboard</NavLink> -
            <NavLink activeClassName="nav__link--active" to="/create">Add Expense</NavLink> -
            <NavLink activeClassName="nav__link--active" to="/help">Help</NavLink>
            <button onClick={startLogout}>Log out</button>
        </p>
    </div>
)

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout)
})

export default connect(null, mapDispatchToProps)(Header)