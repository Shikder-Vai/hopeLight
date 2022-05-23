import React from "react";

const Product = ({ product }) => {
  const { name, img, description, quantity, lessOrder, price } = product;
  return (
    <div className="card -z-30 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-slate-200 font-bold">{name}</h2>
        <div className="flex justify-between">
          <h3 className=" text-white text-lg font-semibold">Price:${price}</h3>
          <h3 className=" text-white text-lg font-semibold">
            Quantity:{quantity}
          </h3>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <h3 className=" text-white text-lg font-semibold">
            Minimum Order:{lessOrder}
          </h3>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
