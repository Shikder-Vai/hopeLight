import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1SvcGr37yKmNuBKIXsEprm7og2VDAKvFyenurcd6C62OChOdJfBAqanGDlZpUxbVl3322Mph0h4y4AWSrjz6Bh00z3C2Ts9H"
);
const PaymentSystem = () => {
  const { id } = useParams();

  const url = ` http://localhost:5000/purchase/${id}`;

  const { data: product, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {product.name}</p>
          <h2 class="card-title">Please Pay for {product.productName}</h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">${product.price}</span> Of
            Quantity :{" "}
            <span className="text-orange-700"> {product.quantity}</span>{" "}
          </p>
          <p>Please pay:Total ${product.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm product={product} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem;
