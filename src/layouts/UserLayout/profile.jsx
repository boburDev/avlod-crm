import React from "react";
import Profile from 'views/Profile'
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

function UserProfile() {
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