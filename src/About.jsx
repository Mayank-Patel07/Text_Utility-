import React from "react";

export default function About(props) {
  return (
    <div
      className={`container d-flex justify-content-center my-4`}
      style={{ width: "30%" }}
    >
      <div className={`card mb-3 bg-${props.mode}`} style={{ height: "20%" }}>
        <img
          style={{ height: "50%", width: "100%" }}
          src="https://www.aqusagtechnologies.com/wp-content/uploads/2015/09/about-us1.jpg"
          className="card-img-top "
          alt="..."
        />
        <div className="card-body">
          <h5 className={`card-title text-center text-${props.mode==="light"?"dark":"white"}`}>About us </h5>
          <p className={`card-text text-center text-${props.mode==="light"?"dark":"white"}`}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
        </div>
      </div>
    </div>
  );
}
