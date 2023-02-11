import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header gx-0 position-fixed top-0 start-0 end-0 bg-white">
        <div className="row border-2 border-bottom py-4 gx-0 w-90 mx-auto">
          <section className="col-sm-6 d-flex align-items-center">
            <figure className="img-wrapper d-lg-block">
              <Link to="/">
                <img
                  src="/assets/dribble.svg"
                  alt="dribble-logo"
                  className="img-fluid"
                />
              </Link>
            </figure>

            <div className="text-wrapper ms-lg-3">
              <p className="m-0 text-capitalize fw-semibold fs lh-sm mb-1">
                lovebirds website login design
              </p>
              <p className="m-0 fs-custom text-muted">
                by <span className="text-capitalize">luke peake</span>
              </p>
            </div>
          </section>
          <section className="col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center thumbnails-nav">
            <figure className="thumbnail-figure mb-0 me-3">
              <Link to="#">
                <img src="/assets/thumbnail-one.webp" alt="thumbnail-one" />
              </Link>
            </figure>
            <figure className="thumbnail-figure mb-0">
              <Link to="#">
                <img
                  src="/assets/thumbnail-2.webp"
                  alt="thumbnail-one"
                  className="active"
                />
              </Link>
            </figure>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
