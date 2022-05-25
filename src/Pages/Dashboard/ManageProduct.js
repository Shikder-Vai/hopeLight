import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ManageProductCard from "./ManageProductCard";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(` http://localhost:5000/product/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <>
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th> Quantity</th>
            </tr>
          </thead>
        </table>
      </>

      {products.map((product) => (
        <ManageProductCard
          key={product._id}
          product={product}
          index={products.indexOf(product)}
        ></ManageProductCard>
      ))}
    </div>
  );
};

export default ManageProduct;
