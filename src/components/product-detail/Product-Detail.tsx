import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getProductDetails } from "../../services/Catalog-Search.service";

import "./Product-Detail.scss";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({
    author: {},
    item: {
      condition: "",
      picture: "",
      description: "",
      sold_quantity: "",
      title: "",
      price: {
        amount: 0,
        currency: "",
      },
    },
  });

  const { id } = useParams<{ id }>();

  useEffect(() => {
    const getDetails = async () => {
      const data = await getProductDetails(id);

      setProductDetail(data);
    };

    getDetails();
  }, []);

  return (
    <div className="product-detail">
      <div className="row g-0">
        <div className="product-detail--description col-md-8">
          <div className="product-detail-image">
            <img src={productDetail.item.picture}></img>
          </div>
          <div className="product-detail-text">
            <p className="product-detail-text--title">
              Descripcion del Producto
            </p>
            <p className="product-detail-text--main">
              {productDetail.item.description}
            </p>
          </div>
        </div>
        <div className="product-detail-cta col-md-4">
          <div className="product-detail-cta--text">
            <div className="product-detail-cta--title">
              <p className="product-detail-cta-tagline">
                {productDetail.item.condition} -{" "}
                {productDetail.item.sold_quantity} Vendidos
              </p>
              <p className="product-detail-cta-main-text">
                {productDetail.item.title}
              </p>
            </div>
            <p className="product-detail-cta-price">
              ${productDetail.item.price.amount}{" "}
              {productDetail.item.price.currency}
            </p>

            <div className="product-detail-cta-btn">
              <a href="#" type="button">
                {" "}
                Comprar{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
