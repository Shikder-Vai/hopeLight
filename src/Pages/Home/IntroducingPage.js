import React from "react";
import imageT from "../../Assest/introducing.png";

const IntroducingPage = () => {
  return (
    <div class="hero min-h-screen my-20 ">
      <div class="hero-content flex-col lg:flex-row space-x-10">
        <img src={imageT} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="max-w-md">
          <h1 class="text-5xl font-bold">Built for Maximum Uptime</h1>
          <p class="py-6">
            You can't fix what you can't look at; RIDGID gives you a range of
            options to find, see and pinpoint exactly where a problem lies with
            industry-leading precision. Our reels, imaging cameras, monitors,
            locators and recorders are designed together to work together on
            locates, so set up time is fast and compatibility is a given.
          </p>

          <button class="btn text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroducingPage;
