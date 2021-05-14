import Profile from 'views/Profile'
import Chat from 'views/Chat'

var routes = [
  {
    path: "/user-profile",
    name: "UserProfile",
    icon: "tim-icons icon-chart-pie-36",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/user-chat",
    name: "UserChat",
    icon: "tim-icons icon-chat-33",
    component: Chat,
    layout: "/user",
  }
];
export default routes;
