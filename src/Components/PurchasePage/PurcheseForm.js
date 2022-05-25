import React from "react";

const PurcheseForm = ({ product }) => {
  const { name, description, quantity, lessOrder, price } = product;
  return (
    <div className=" flex justify-center items-center">
      <div className="flex flex-col">
        <input
          type="text"
          value={name}
          placeholder="Type here"
          class="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          value={price}
          placeholder="Type here"
          class="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder={lessOrder}
          class="input input-bordered input-accent w-full max-w-xs"
        />
        <input type="button" value="" />
      </div>
    </div>
  );
};

export default PurcheseForm;
