import React from "react";
import { Header, PrimaryInput } from "../components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="wrapper">
      <Header />
      <section className="body-content">
        <div className="d-flex flex-column flex-md-row bd">
          <section className="card-image mb-0 w-custom position-relative">
            <img
              src="/assets/birdie-copy.svg"
              alt="birdeie"
              className="img-fluid"
            />
            <div className="position-absolute text-white bottom-0 start-0 end-0 pos-abs">
              <h3 className="w-90 mx-auto text-center">
                Maecenas mattis egestas
              </h3>
              <p className="w-90 mx-auto text-center">
                Erdum et malesuada fames ac ante ipsum primis in faucibus
                uspendisse porta.
              </p>
              <ul className="indicators my-4 w-90 mx-auto d-flex justify-content-center align-items-center">
                <li className="bg-white"></li>
                <li className="bg-grey"></li>
                <li className="bg-grey"></li>
                <li className="bg-grey"></li>
              </ul>
            </div>
          </section>

          <section className="w-custom">
            <div className="pt-80">
              <h1 className="w-100 text-center text-capitalize ds text-muted">
                lovebirds
              </h1>

              <div className="form-container">
                <p className="mt-lg-40 w-100 text-center fw-semibold text-muted">
                  Welcome to <span className="text-capitalize">lovebirds</span>
                </p>

                <form className="form">
                  <PrimaryInput
                    type="text"
                    placeholder="Please enter your name"
                    id="name"
                    label="Full name"
                  />

                  <PrimaryInput
                    type="password"
                    placeholder="Please enter your password"
                    id="password"
                    label="Password"
                  />

                  <p className="w-100 mt-2 text-end text-success text-capitalize fs-12">
                    forgot password?
                  </p>

                  <div className="mx-auto mt-4 btn-wrapper overflow-hidden">
                    <button className="btn btn-secondary login-btn">
                      Sign in
                    </button>
                  </div>

                  <div className="or-wrapper position-relative bg-secondary my-5 mx-auto">
                    <p className="text-muted position-absolute top-0 start-50 translate-middle m-0 bg-white">
                      or
                    </p>
                  </div>
                  <div className="google-btn-container mx-auto">
                    <div className="google-btn">
                      <button className="btn" type="button">
                        <span
                          className="iconify me-2"
                          data-icon="flat-color-icons:google"
                        ></span>
                        Sign in with Google
                      </button>
                    </div>
                  </div>

                  <p className="my-3 text-muted text-capitalize w-100 text-center">
                    new lovebirds?
                    <Link
                      to="#"
                      className="text-success text-decoration-underline"
                    >
                      create account.
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};
export default Login;
