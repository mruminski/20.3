import React from "react";
import { Link } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-theme.css";
const linksArr = [
  {
    url: "/countries",
    name: "Countries"
  },
  {
    url: "/continents",
    name: "Continents"
  },
  {
    url: "/contact",
    name: "Contact"
  }
];

const Navigation = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Countries
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {linksArr.map(item => (
              <li key={item.name}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">{props.children}</div>
  </div>
);

export default Navigation;
