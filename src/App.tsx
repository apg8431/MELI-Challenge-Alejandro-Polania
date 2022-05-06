import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import "./App.scss";
import { Breadcrumb } from "./components/breadcrumb";
import { Initial } from "./components/initial";
import { ProductDetail } from "./components/product-detail";
import { ProductList } from "./components/product-list";

import { Header } from "./components";

function App() {
  let [currentSearch, setCurrentSearch] = useState();
  let [currentCategories, setCurrentCategories] = useState();

  const updateSearch = (searchQuery) => {
    setCurrentSearch(searchQuery);
  };

  const updateCategories = (categories) => {
    setCurrentCategories(categories);
  };

  return (
    <Router>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-12">
            <Header searchHandler={updateSearch}></Header>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-12">
            <div className="bc-container">
              <Breadcrumb categories={currentCategories} />
            </div>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-md-12">
            <Switch>
              <Route path="/items/:id">
                <div className="product-detail-container">
                  <ProductDetail></ProductDetail>
                </div>
              </Route>
              <Route path="/items">
                <div className="list-container">
                  <ProductList
                    searchQuery={currentSearch}
                    setCategories={updateCategories}
                  ></ProductList>
                </div>
              </Route>
              <Route path="/">
                <Initial cleanCategories={updateCategories}></Initial>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
