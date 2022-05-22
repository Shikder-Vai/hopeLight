import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.slice(0, 6).map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
