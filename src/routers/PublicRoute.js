import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

import { Header } from "../components"

export const PublicRoute = props => {
    if(props.isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return <Route {...props} />
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: !!auth.uid
})

export default connect(mapStateToProps)(PublicRoute)