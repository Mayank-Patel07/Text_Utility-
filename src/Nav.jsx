import React from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div  className="container-fluid">
          <Link className="navbar-brand " to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
            {/* <Buttons changemode={props.changemode} /> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "black" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.changemode}
              />
              <label
                className="form-check-label "
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "Dark" : "Light"} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
