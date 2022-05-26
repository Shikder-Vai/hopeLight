import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import imageT from "../../Assest/introducing.png";
import auth from "../../firebase.init";

const IntroducingPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const getStartedbtn = () => {
    if (!user) {
      navigate("/login");
      console.log("clicked");
    } else {
      navigate("/products");
    }
  };
  return (
    <div className="hero min-h-screen my-14 ">
      <div className="hero-content flex-col lg:flex-row md:space-x-10">
        <img
          src={imageT}
          className="md:max-w-sm sm:max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="md:max-w-md sm:max-w-sm">
          <h1 className="text-5xl font-bold">Built for Maximum Uptime</h1>
          <p className="py-6">
            You can't fix what you can't look at; RIDGID gives you a range of
            options to find, see and pinpoint exactly where a problem lies with
            industry-leading precision. Our reels, imaging cameras, monitors,
            locators and recorders are designed together to work together on
            locates, so set up time is fast and compatibility is a given.
          </p>

          <button
            onClick={() => getStartedbtn()}
            className="btn text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroducingPage;
