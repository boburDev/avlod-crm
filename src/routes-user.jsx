import Profile from 'views/Profile'
// import Login from "views/Auth";

var routes = [
  {
    path: "/user-profile",
    name: "UserProfile",
    icon: "tim-icons icon-chart-pie-36",
    component: Profile,
    layout: "/user",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "tim-icons icon-button-power",
  //   component: Login,
  //   layout: "/login",
  // }
];
export default routes;
