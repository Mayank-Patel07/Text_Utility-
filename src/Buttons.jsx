import React from "react";

function Buttons(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={() => {
          props.changemode("primary");
        }}
      >
        Blue
      </button>
      <button
        type="button"
        className="btn btn-secondary mx-2"
        onClick={() => {
          props.changemode("secondary");
        }}
      >
        Grey
      </button>
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={() => {
          props.changemode("success");
        }}
      >
        Green
      </button>
      <button
        type="button"
        className="btn btn-danger mx-2"
        onClick={() => {
          props.changemode("danger");
        }}
      >
        Red
      </button>
      <button
        type="button"
        className="btn btn-warning mx-2"
        onClick={() => {
          props.changemode("warning");
        }}
      >
        Yellow
      </button>

      <button
        type="button"
        className="btn btn-light mx-2"
        onClick={() => {
          props.changemode("light");
        }}
      >
        Light
      </button>
      <button
        type="button"
        className="btn btn-dark mx-2"
        onClick={() => {
          props.changemode("dark");
        }}
      >
        Dark
      </button>
    </div>
  );
}

export default Buttons;
