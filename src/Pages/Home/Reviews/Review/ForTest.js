import React from "react";

const ForTest = () => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div class="carousel-item">
        <div className="flex flex-col p-4 text-accent card bg-base-100 shadow-xl justify-center">
          <div>
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex p-3 space-x-5 items-center">
            <div className=" outline outline-offset-2 outline-blue-500 rounded-full">
              <img
                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
                alt=""
              />
            </div>
            <div>
              <h2>Winson Herry</h2>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForTest;
