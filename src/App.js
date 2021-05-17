import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Users";
import { PostList, PostEdit, PostCreate } from "./Posts";
import Dashboard from './Dashboard';
import authProvider from './Auth';
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import NotFound from './NotFound';
import Menu from './Menu';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// import dataProvider from './DataProvider';


const App = () => (
  <Admin dashboard={Dashboard} menu={Menu} catchAll={NotFound} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
