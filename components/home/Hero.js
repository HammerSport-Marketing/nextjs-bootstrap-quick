import React from "react";

function Hero() {
  return (
    <section className="slice py-5">
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <figure className="w-100">
              <img
                alt="Image placeholder"
                src="../../assets/img/svg/illustrations/illustration-1.svg"
                className="img-fluid mw-md-120"
              />
            </figure>
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
            <h1 className="display-4 text-center text-md-left mb-3">
              It's time to amplify your{" "}
              <strong className="text-primary">online business</strong>
            </h1>
            <p className="lead text-center text-md-left text-muted">
              Build a beautiful, modern website with flexible Bootstrap
              components built from scratch.
            </p>
            <div className="text-center text-md-left mt-5">
              <a href="#" className="btn btn-primary btn-icon">
                <span className="btn-inner--text">Get started</span>
                <span className="btn-inner--icon">
                  <i data-feather="arrow-right"></i>
                </span>
              </a>
              <a
                href="#"
                className="btn btn-neutral btn-icon d-none d-lg-inline-block"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
