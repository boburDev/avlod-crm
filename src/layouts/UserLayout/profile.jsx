import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "routes";
import Profile from 'views/Profile'
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

function UserProfile() {
  
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
              
              <Profile />
              
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default UserProfile;