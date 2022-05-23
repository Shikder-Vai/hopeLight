import React from "react";
import useReviews from "../../../hooks/useReviews";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <div className=" my-7">
      <div className=" my-7 flex justify-center items-center">
        <h1 className="text-2xl underline text-sky-300 ">Customer Reviews</h1>
      </div>
      <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.slice(0, 6).map((review) => (
          <Review review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
