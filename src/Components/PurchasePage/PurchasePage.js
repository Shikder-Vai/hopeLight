import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg from "../../Assest/footer.png";
import PurcheseForm from "./PurcheseForm";

const PurchasePage = () => {
  const [product, setProduct] = useState([]);
  const [refresh] = useState(0);
  const { productId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, refresh]);
  const { name, img, description, quantity, lessOrder, price } = product;
  return (
    <div>
      <div>
        <div className=" my-7 flex justify-center items-center">
          <h1 className="text-2xl font-serif font-bold text-sky-500">
            Please Confirm Your Order
          </h1>
        </div>
        <div
          className=" my-7 flex justify-center items-center bg-no-repeat bg-contain bg-top "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div class="card glass shadow-xl">
            <figure>
              <img className="p-4" src={img} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl font-bold">{name}</h2>
              <h3 class="card-title">
                <span className="text-xl font-semibold">Price:</span>${price}
              </h3>
              <h3 class="card-title">
                <span className="text-xl font-semibold">Quantity:</span>$
                {quantity}
              </h3>
              <h3 class="card-title">
                <span className="text-xl font-semibold">Minimum Order:</span>$
                {lessOrder}
              </h3>
              <p className=" max-w-sm">{description}</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <PurcheseForm product={product} />
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
