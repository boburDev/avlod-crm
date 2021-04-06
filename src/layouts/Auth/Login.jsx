import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "routes";
import Auth from 'views/Auth'
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

function Login() {
  
	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
		  if (prop.layout === "/admin") {
			return (
			  <Route
				path={prop.layout + prop.path}
				component={prop.component}
				key={key}
			  />
			);
		  } else {
			return null;
		  }
		});
	  };
  
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <React.Fragment>
          <div className="wrapper">
            <div className="main-panel" data={color}>
              <Auth />
              <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/login" />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Login;