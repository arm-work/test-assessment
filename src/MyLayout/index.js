import { Layout } from "react-admin";
// import MyAppBar from "./MyAppBar";
import MyMenu from "../Menu";
// import MyNotification from "./MyNotification";

const MyLayout = (props) => (
  <Layout
    {...props}
    // appBar={MyAppBar}
    menu={MyMenu}
    // notification={MyNotification}
  />
);

export default MyLayout;
