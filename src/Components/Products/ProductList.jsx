import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({ data }) => {
  return (
    <div data-testid="products-container">
      {data.map((item) => (
        <ProductItem
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          category={item.category}
        />
      ))}
    </div>
  );
};

// export
export default ProductList;
