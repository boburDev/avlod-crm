import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import AdminLayout from "layouts/Admin/Admin"
import LoginLayout from "layouts/Auth/Login"
import NewUserLayout from "layouts/Forms/new-user"

export default function App() {
    return(
        <>
        <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
            <Route path="/login" render={(props) => <LoginLayout {...props} />} />
            <Route path="/new-user" render={(props) => <NewUserLayout {...props} />} />
            <Redirect from="/" to="/new-user" />
        </Switch>
        </>
    )
}