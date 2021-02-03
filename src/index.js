import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import IPData from "ipdata";
import App from "./components/App";

// const ipdata = new IPData(
//   "dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e"
// );

//tried fetch on IPdata but it didnt work

// fetch("https://api.ipdata.co")
//   .then((response) => {
//     return response.json();
//   }, "jsonp")
//   .then((res) => {
//     console.log(res.ip);
//   });

//here if needed to use IPdata on known address

// const ip = "109.64.100.27";
// ipdata.lookup(ip).then(function (data) {
//   city = data.city;
//   console.log(data.city);
//   ReactDOM.render(<App city={city} />, document.getElementById("root"));
// });

fetch("https://geolocation-db.com/json/")
  .then((response) => response.json())
  .then((data) => {
    let { IPv4, city, country_name } = data;
    console.log(city);
    ReactDOM.render(
      <App city={city} IPv4={IPv4} country_name={country_name} />,
      document.getElementById("root")
    );
  });
