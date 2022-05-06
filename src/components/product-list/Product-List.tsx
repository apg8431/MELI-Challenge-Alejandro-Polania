import React, { useEffect, useState } from "react";


import { getItemsFromQuery } from "../../services/Catalog-Search.service";
import "./Product-List.scss";
import { ProductItem } from "../../atoms/product-item";

const ProductList = ({ searchQuery, setCategories }) => {

  const [allItems, setAllItems] = useState({
    author: {},
    items: [],
  });

  //Refactor: Meter en un custom hook
  useEffect(() => {
    const getAllItems = async () => {
      const data = await getItemsFromQuery(searchQuery);
      setAllItems(data);
      setCategories(data.categories);
    };

    getAllItems();
  }, [searchQuery]);


  return (
    <div>
      {allItems.items.map((currentItem, i) => {
        return (
          <React.Fragment key={i}>
            <ProductItem item={currentItem}></ProductItem>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default ProductList;
