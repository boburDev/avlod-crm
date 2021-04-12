import React from "react"
import { Route, Switch } from "react-router-dom"

import AdminLayout from "layouts/Admin/Admin"
import LoginLayout from "layouts/Auth/Login"
import NewUserLayout from "layouts/Forms/new-user"
import UserLayout from "layouts/UserLayout/profile.jsx"

export default function App() {
    return(
        <>
         <Switch>
            <Route path="/admin" component={AdminLayout} />
            <Route path="/user" component={UserLayout} />
            <Route path="/login">
                <LoginLayout path="login" />
            </Route>
            <Route path="/login-admin">
                <LoginLayout path="admin" />
            </Route>
            <Route path="/sign-up" component={NewUserLayout} />
        </Switch>
        </>
    )
}