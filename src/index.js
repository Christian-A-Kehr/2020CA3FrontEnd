import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar/Navbar";

const AppWithRouter = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));

// const info = [
//   {id: "rendering", title:"Rendering with React", info:"Add some text here"},
//   {id: "cool", title:"cool link", info:"dummy text"}
// ]

// ReactDOM.render(
//   <React.StrictMode>
//     <Navbar />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
