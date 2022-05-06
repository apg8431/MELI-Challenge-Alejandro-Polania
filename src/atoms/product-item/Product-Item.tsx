import { Link } from "react-router-dom";

import "./Product-Item.scss";
import freeShip from "./ic_shipping.png";

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="product-item--image">
        <img className="image-placeholder" src={item.picture}></img>
      </div>
      <div className="product-item--description">
        <div className="product-item--pricing">
          <div className="product-item--price">
            <p>
              ${item.price.amount} {item.price.currency}{" "}
            </p>
            <div className="product-item--flag">
              {item.free_shipping ? <img src={freeShip}></img> : <img></img>}
            </div>
          </div>
        </div>
        <div className="product-item--text">
          <p className="product-item-text-long">
            <Link to={`/items/${item.id}`}>{item.title}</Link>
          </p>
          <p className="product-item-tagline">{item.condition}</p>
        </div>
      </div>
      <div className="product-item--location">
        <p className="product-item--location-text"> Mendoza </p>
      </div>
    </div>
  );
};

export default ProductItem;
