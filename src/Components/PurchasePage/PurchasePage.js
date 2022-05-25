import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg from "../../Assest/footer.png";

const PurchasePage = () => {
  const [product, setProduct] = useState([]);
  const [refresh] = useState(0);
  const { productId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/Product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, refresh]);
  const { name, img, description, quantity, lessOrder, price } = product;
  return (
    <div>
      <div>
        <div>
          <h1>Please Confirm Your Order</h1>
        </div>
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className=" my-7 flex justify-center items-center bg-no-repeat "
        >
          <div class="card glass card-side bg-base-100 shadow-xl">
            <figure>
              <img src={img} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <h3 class="card-title">
                <span className="text-xl font-bold">Price:</span>${price}
              </h3>
              <h3 class="card-title">
                <span className="text-xl font-bold">Quantity:</span>${quantity}
              </h3>
              <h3 class="card-title">
                <span className="text-xl font-bold">Minimum Order:</span>$
                {lessOrder}
              </h3>
              <p className=" max-w-sm">{description}</p>
            </div>
          </div>
          {/* <div className="card -z-30 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={"img"} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-slate-200 font-bold">{"name"}</h2>
              <div className="flex justify-between">
                <h3 className=" text-white text-lg font-semibold">
                  Price:${"price"}
                </h3>
                <h3 className=" text-white text-lg font-semibold">
                  Quantity:{"quantity"}
                </h3>
              </div>
              <p>{"description"}</p>
              <div className="card-actions justify-between items-center">
                <h3 className=" text-white text-lg font-semibold">
                  Minimum Order:{"lessOrder"}
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
