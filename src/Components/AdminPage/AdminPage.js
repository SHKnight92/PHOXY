import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddServices from "../AdminPage/AddServices/AddServices";
import MakeAdmin from "../AdminPage/MakeAdmin/MakeAdmin";
import OrderList from "../AdminPage/OrderList/OrderList";

const routes = [
  {
    path: "/admin/order-list",
    exact: true,
    sidebar: () => <div></div>,
    main: OrderList,
  },
  {
    path: "/admin/add-services",
    sidebar: () => <div></div>,
    main: AddServices,
  },
  {
    path: "/admin/make-admin",
    sidebar: () => <div></div>,
    main: MakeAdmin,
  },
];

const AdminPage = () => {
  return (
    <Router>
      <div className="row" style={{ minHeight: "600px" }}>
        <div className="col-md-3 bg-danger">
          <nav className="navbar">
            <ul className="navbar-nav px-5">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/order-list">
                  Order List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/add-services">
                  Add Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/make-admin">
                  Make Admin
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div className="col-md-9">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default AdminPage;
