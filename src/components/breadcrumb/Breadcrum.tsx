import React from "react";
import "./Breadcrumb.scss";

const Breadcrumb = ({ categories }) => {

  categories = categories ? categories : ["Iniciar Busqueda"];

  return (
    <div className="Breadcrumb">
      {categories.map((category, i) => {
        const size = categories.length;
        return (
          <React.Fragment key={i}>
            <p> {category} </p> {i === size - 1 ? <p></p> : <p>&gt;</p>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
