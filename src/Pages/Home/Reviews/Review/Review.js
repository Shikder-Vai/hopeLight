import React from "react";
import people1 from "../../../../Assest/people1.png";

const Review = () => {
  return (
    <div className="flex flex-col p-4 text-accent card bg-base-100 shadow-xl justify-center">
      <div>
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
      </div>
      <div className="flex p-3 space-x-5 items-center">
        <div className=" outline outline-offset-2 outline-blue-500 rounded-full">
          <img src={people1} alt="" />
        </div>
        <div>
          <h2>Winson Herry</h2>
          <p>California</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
