import React from "react";

function App(props) {
  console.log(props);
  return (
    <div>
      <h1>asd</h1>
      <iframe
        width={"600"}
        height={"450"}
        frameBorder={"0"}
        style={{ border: 0 }}
        src={
          "https://www.google.com/maps/embed/v1/search?q=" +
          props.city +
          "&key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
