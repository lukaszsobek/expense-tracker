import React from "react"
import { connect } from "react-redux"

import { startLogin } from "../actions"

export const LoginPage = ({ startLogin }) => {
    return (
        <div className="login__imageBg">
            <div className="login__contentBox">
                <h1 className="login__title">Expense Tracker</h1>
                <p className="login__slogan">Track your expenses with this app</p>
                <button
                    className="login__button"
                    onClick={startLogin}
                >
                    Log in with Google
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin)
})

export default connect(null, mapDispatchToProps)(LoginPage)