import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import IPData from "ipdata";
import App from "./components/App";
let city = "hadera";
const ipdata = new IPData(
  "dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e"
);

const ip = "109.64.100.27";
ipdata.lookup(ip).then(function (data) {
  city = data.city;
  console.log(data.city);
  ReactDOM.render(<App city={city} />, document.getElementById("root"));
});
// console.log(city);

/* <React.StrictMode>
    <App />
  </React.StrictMode>, */
