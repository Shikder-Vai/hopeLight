import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../../Pages/Home/Reviews/Review/Review";

const AllReviews = () => {
  const [reviews] = useReviews();

  return (
    <div className=" ">
      <div className=" flex justify-center items-center">
        <h1 className="text-2xl mt-5 underline text-sky-300 ">
          Customer Reviews
        </h1>
      </div>
      <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review.index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
