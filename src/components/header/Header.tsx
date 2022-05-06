import { History, Location } from "history";
import { useHistory, useLocation } from "react-router-dom";

import { SearchInput } from "../../atoms/search-input";

import "./Header.scss";

import logo from "./Logo_ML.png";

const Header = ({ searchHandler }) => {
  const appNav: History = useHistory();
  const location: Location = useLocation();

  console.log(appNav);
  console.log(location);
  const currentPath = location.pathname;

  const processSubmit = (e: any) => {
    e.preventDefault();
    const query = e.target[0].value;

    searchHandler(query);

    const url = encodeURI(`/items?search=${query}`);
    appNav.push({
      pathname: "/items",
      search: `?search=${query}`,
    });

  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="placeholder">
          <form onSubmit={processSubmit}>
            <SearchInput></SearchInput>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
