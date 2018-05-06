import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { startLogout } from "../actions"

export const Header = ({ startLogout }) => (
    <header className="app-header">
        <div className="app-container app-header__container">
            <Link to="/dashboard" exact="true">
                <h1 className="app-header__title">Expense Tracker</h1>
            </Link>

            <button
                className="app-header__logout"
                onClick={startLogout}
            >Log out</button>
        </div>
    </header>
)

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout)
})

export default connect(null, mapDispatchToProps)(Header)