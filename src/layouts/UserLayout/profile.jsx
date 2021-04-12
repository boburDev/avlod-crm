import React from "react";
import UserNavbar from "components/Navbars/AdminNavbar";
import PerfectScrollbar from "perfect-scrollbar";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes-user";

import logo from "assets/img/react-logo.png";

var ps;

function UserProfile() {
	const accessToken = window.localStorage.getItem('access_token')
	
	const location = useLocation();
	const mainPanelRef = React.useRef(null);
	const [sidebarOpened, setsidebarOpened] = React.useState(
		document.documentElement.className.indexOf("nav-open") !== -1
		);
		React.useEffect(() => {
			if (navigator.platform.indexOf("Win") > -1) {
				document.documentElement.className += " perfect-scrollbar-on";
				document.documentElement.classList.remove("perfect-scrollbar-off");
				ps = new PerfectScrollbar(mainPanelRef.current, {
					suppressScrollX: true,
				});
				let tables = document.querySelectorAll(".table-responsive");
				for (let i = 0; i < tables.length; i++) {
					ps = new PerfectScrollbar(tables[i]);
				}
			}
			// Specify how to clean up after this effect:
			return function cleanup() {
				if (navigator.platform.indexOf("Win") > -1) {
					ps.destroy();
					document.documentElement.classList.add("perfect-scrollbar-off");
					document.documentElement.classList.remove("perfect-scrollbar-on");
				}
			};
		});
		React.useEffect(() => {
			if (navigator.platform.indexOf("Win") > -1) {
				let tables = document.querySelectorAll(".table-responsive");
				for (let i = 0; i < tables.length; i++) {
					ps = new PerfectScrollbar(tables[i]);
				}
			}
			document.documentElement.scrollTop = 0;
			document.scrollingElement.scrollTop = 0;
			if (mainPanelRef.current) {
				mainPanelRef.current.scrollTop = 0;
			}
		}, [location]);
		// this function opens and closes the sidebar on small devices
		const toggleSidebar = () => {
			document.documentElement.classList.toggle("nav-open");
			setsidebarOpened(!sidebarOpened);
		};
		const getRoutes = (routes) => {
			return routes.map((prop, key) => {
				if (prop.layout === "/user") {
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
			
			
			React.useEffect(()=>{
				if (!accessToken) {
					window.localStorage.removeItem('access_token')
					window.location.href = '/login'
				}
			},[accessToken])

			const getBrandText = (path) => {
				for (let i = 0; i < routes.length; i++) {
					if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
						return routes[i].name;
					}
				}
				return "Brand";
			};
			
			const logOut = () => {
				window.localStorage.removeItem('access_token')
				window.location.href = '/login'
			}

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <React.Fragment>
          <div className="wrapper">
			<Sidebar
			routes={routes}
			logo={{
				text: "Avlod21",
				imgSrc: logo,
			}}
			toggleSidebar={toggleSidebar}
			logOut={logOut}
			/>
            <div className="main-panel" data={color}>
			<UserNavbar
					brandText={getBrandText(location.pathname)}
					toggleSidebar={toggleSidebar}
					sidebarOpened={sidebarOpened}
					displayNone={false}
					/>
			  <Switch>
				{getRoutes(routes)}
				<Redirect from="/" to="/user/user-profile" />
				</Switch>
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default UserProfile;