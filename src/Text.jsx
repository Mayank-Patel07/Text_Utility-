import React, { useState } from "react";
import './App.css'

export default function Text(props) {
  const [text, SetText] = useState("");
  const [Disable, setDisable] = useState(true);
 
  const handleOnChange = (event) => {
    SetText(event.target.value);
    setDisable(false);
    if (event.target.value === "") {
      setDisable(true);
    }
    // console.log(event.target.value);
  };

  const upperCase = () => {
    SetText(text.toUpperCase());
    props.showalert("Converted to upper case", "success");
  };

  const lowerCase = () => {
    SetText(text.toLowerCase());
    props.showalert("Converted to Lower case", "success");
  };

  const Capitalize = () => {
    let newText = text[0].toUpperCase() + text.slice(1);
    SetText(newText);
    props.showalert("First letter has been capitalize", "success");
  };

  const lowerFirstletter = () => {
    let newText = text[0].toLowerCase() + text.slice(1);
    SetText(newText);
    props.showalert(
      "First letter has been converted into lower case",
      "success"
    );
  };

  const ClearAll = () => {
    SetText("");
    props.showalert("Text has been clear", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text has been copied", "success");
  };

  const remove_space = () => {
    // console.log(text.split(/[ ]+/));
    // console.log(text.split(/[ ]+/).join(" "));
    SetText(text.split(/[ ]+/).join(" "));
    props.showalert("Text extra space has been removed", "success");
  };

  return (
    <div
      className="container my-1"
      style={{ color: props.mode === "light" ? "grey" : "white" }}
    >
      <div className="form-group">
        <h1 htmlFor="exampleInputEmail1">Enter Your Text</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "light" ? "grey" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        onClick={upperCase}
        className="btn btn-primary button-90 mx-2 my-1"
        disabled={Disable}
      >
        UpperCase
      </button>
      <button
        type="submit"
        onClick={lowerCase}
        className="btn btn-primary button-90 my-1"
        disabled={Disable}
      >
        LowerCase
      </button>
      <button
        type="submit"
        onClick={Capitalize}
        className="btn btn-primary button-90 mx-2 my-1"
        disabled={Disable}
      >
        Capitalize
      </button>
      <button
        type="submit"
        onClick={lowerFirstletter}
        className="btn btn-primary button-90 mx-2 my-1"
        disabled={Disable}
      >
        LowerFirstletter
      </button>
      <button
        type="submit"
        onClick={copyText}
        className="btn btn-primary button-90 mx-2 my-1"
        disabled={Disable}
      >
        CopyText
      </button>
      <button
        type="submit"
        onClick={ClearAll}
        className="btn btn-primary button-90 mx-2 my-1"
        disabled={Disable}
      >
        ClearAll
      </button>
      <button
        type="submit"
        onClick={remove_space}
        className="btn btn-primary mx-2 button-90 my-1"
        disabled={Disable}
        // style={{height:"50px"}}
      >
        RemoveSpace
      </button>
      {/* <p className="my-1">
        {console.log(text.split(" "))}
        {text.length === 0 ? "0" : text.split(" ").length - 1} Words and{" "}
        {text.length} Characters
      </p> */}
      <p className="my-2">
        {/* {console.log(text.split(" "))} */}
        {/* {console.log(text.split(/\s+/))} */}
        {/* {console.log( text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length)} */}

        {
          text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length
        } {""}
        Words and {""}
        {text.length} Characters
      </p>
      <h2>Preview</h2>
      <p>{text.length === 0 ? "Please write something to preview" : text}</p>
    </div>
  );
}
