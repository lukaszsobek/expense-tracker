import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

import { Header } from "../components"

export const PrivateRoute = ({
    component, path, isAuthenticated
}) => {
    if(!isAuthenticated) {
       return <Redirect to="/" />
    }

    return (
        <div>
            <Header />
            <Route path={path} component={component} />
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: !!auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)