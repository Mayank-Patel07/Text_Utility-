import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Text from "./Text";
import Alert from "./Alert";
// import Footer from "./Footer";
import Error from "./Error";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      alertmsg: message,
      alerttype: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  // Form colorful buttons
  // const removeclass = () => {
  //   document.body.classList.remove("bg-secondary");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  // };

  const changemode = (nameclass) => {
    // Form colorful buttons
    // console.log(nameclass);
    // if (
    //   nameclass === "secondary" ||
    //   nameclass === "success" ||
    //   nameclass === "danger" ||
    //   nameclass === "warning" ||
    //   nameclass === "primary" ||
    //   nameclass === "light" ||
    //   nameclass === "dark"
    // ) {
    //   removeclass();
    //   document.body.classList.add(`bg-${nameclass}`);
    // }

    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav mode={mode} changemode={changemode} showalert={showalert} />
        <Alert Alert={alert} />
        <Routes>
          <Route
            exact path="/"
            element={<Text mode={mode} showalert={showalert} />}
          />
          <Route exact path="/About" element={<About mode={mode} />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
        {/* <Footer mode={mode}/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
