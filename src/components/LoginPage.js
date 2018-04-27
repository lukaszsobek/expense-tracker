import React from "react"
import { connect } from "react-redux"

import { startLogin } from "../actions"

export const LoginPage = ({ startLogin }) => {
    return (
        <button onClick={startLogin}>
            Login
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin)
})

export default connect(null, mapDispatchToProps)(LoginPage)