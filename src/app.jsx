import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import AdminLayout from "layouts/Admin/Admin"
import LoginLayout from "layouts/Auth/Login"
import NewUserLayout from "layouts/Forms/new-user"

export default function App() {
    

    const accessToken = window.localStorage.getItem('access_token')
    const [access, setAccess] = React.useState(false)


    React.useEffect(()=>{
        if (accessToken) {
            setAccess(accessToken)
        }else {
            setAccess(false)
        }
    },[accessToken])

    return(
        <>
        {
        access ? (
         <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
            <Redirect from="*" to="/admin" />
        </Switch>
        ) :
        (
        <Switch>
            <Route path="/new-user" render={(props) => <NewUserLayout {...props} />} />
            <Route path="/login" render={(props) => <LoginLayout {...props} />} />
            <Redirect from="/" to="/new-user" />
        </Switch>
        )
        }
        </>
    )
}