import React from "react";
// import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
      <footer
        className="text-center text-lg-start text-white"
        style={{
          backgroundColor: props.mode === "light" ? "white " : " rgb(64 64 69)",
          color: props.mode === "light" ? "black " : "white ",
        }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{
            backgroundColor:
              props.mode === "light"
                ? "rgba(0, 0, 0, 0.2) "
                : "rgb(55 131 219) ",
            color: props.mode === "light" ? "black " : "white ",
          }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className=" me-4">
            </a>

          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          © 2023 Copyright:
          <a className="text-white" href="/">
            Today'sNews.com
          </a>
        </div>
      </footer>
  
  );
}
