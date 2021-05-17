import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Users";
import { PostList, PostEdit, PostCreate } from "./Posts";
import Dashboard from "./Dashboard";
import authProvider from "./Auth";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import NotFound from "./NotFound";
import Menu from "./Menu";
import MyLayout from "./MyLayout";
import { createMuiTheme } from "@material-ui/core/styles";
import bitcoinRateReducer from './Reducer/BitcoinReducer';
import bitcoinSaga from './Sagas/BitcoinSagas';
import customRoutes from './Routes';
import { createBrowserHistory  } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from './createStore';

const history = createBrowserHistory();

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// import dataProvider from './DataProvider';

const theme = createMuiTheme({
  palette: {
    type: "dark", // Switching the dark mode on is a single property value change.
  },
});

const initialState = () => ({
  theme: localStorage.getItem('theme'),
  grid: localStorage.getItem('grid'),
});

const Ready = () => (
  <div>
      <h1>User Posts Are Loaded</h1>
      <p>You can now view posts</p>
  </div>
)

const App = () => (
  <Provider
  store={createAdminStore({
      authProvider,
      dataProvider,
      history,
  })}
>
  <Admin
    layout={MyLayout}
    dashboard={Dashboard}
    theme={theme}
    menu={Menu}
    catchAll={NotFound}
    authProvider={authProvider}
    dataProvider={dataProvider}
    customReducers={{ bitcoinRate: bitcoinRateReducer }}
    customSagas={[ bitcoinSaga ]}
    customRoutes={customRoutes}
    initialState={initialState}
    history={history}
    ready={Ready}
  >
    <Resource
      name="Posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="Users" list={UserList} icon={UserIcon} />
  </Admin>
  </Provider>
);

export default App;
