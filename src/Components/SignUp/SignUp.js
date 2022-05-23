import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex justify-center items-center">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <Link to={"/login"} class="label-text-alt link link-hover">
                    Already have an account? Login.
                  </Link>
                </label>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
