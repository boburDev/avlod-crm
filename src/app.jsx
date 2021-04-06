import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import AdminLayout from "layouts/Admin/Admin"
import LoginLayout from "layouts/Auth/Login"

export default function App() {
    return(
        <>
        <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
            <Route path="/login" render={(props) => <LoginLayout {...props} />} />
            <Redirect from="/" to="/login" />
        </Switch>
        </>
    )
}