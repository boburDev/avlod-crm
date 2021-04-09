import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import AdminLayout from "layouts/Admin/Admin"
import LoginLayout from "layouts/Auth/Login"
import NewUserLayout from "layouts/Forms/new-user"
import UserLayout from "layouts/UserLayout/profile.jsx"

export default function App() {
    

    // const accessToken = window.localStorage.getItem('access_token')
    // const [access, setAccess] = React.useState(true)


    // React.useEffect(()=>{
    //     if (accessToken) {
    //         setAccess(accessToken)
    //     }else {
    //         setAccess(false)
    //     }
    // },[accessToken])

    return(
        <>
         <Switch>
            <Route path="/admin" component={AdminLayout} />
            <Route path="/user" component={UserLayout} />
            <Route path="/login" component={LoginLayout} />
            <Route path="/sign-up" component={NewUserLayout} />
            <Redirect from='/' to='/sign-up' />
        </Switch>
        </>
    )
}