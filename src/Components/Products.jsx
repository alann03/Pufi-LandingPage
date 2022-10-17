import React from "react";
import { ProductsCont } from "../Styles/ProductsStyle";

function Products({ image1, image2, name, position }) {
  return (
    <ProductsCont position={position}>
      <div className="imgCont">
        <button>SHOP</button>
        <img src={image1} alt="" />
      </div>
      <div className="detailCont">
        <div className="subDetailCont">
          <img src={image2} alt="" />
          <h3>{name}</h3>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>{"> Ver mas"}</button>
        </div>
      </div>
    </ProductsCont>
  )
}

export default Products;