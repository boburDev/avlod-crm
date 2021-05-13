import Dashboard from "views/Dashboard";
import TableList from "views/TableList";
import UserProfile from "views/UserProfile";
import Todolist from "views/Todolist";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/todo-list",
    name: "To-do List",
    icon: "tim-icons icon-puzzle-10",
    component: Todolist,
    layout: "/admin",
  }
];
export default routes;
