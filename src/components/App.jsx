import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function App(props) {
  const [cityInfo, setCityName] = useState({
    cityName: props.city,
    lookForCity: props.city,
  });
  return (
    <div>
      <TextField
        disabled
        defaultValue={props.IPv4}
        label="your ip address"
      ></TextField>
      <TextField
        onKeyPress={(event) => {
          console.log(event.key);
          event.key === "Enter" &&
            setCityName({ ...cityInfo, lookForCity: cityInfo.cityName });
          // setCityName({ ...cityInfo, cityName: event.target.value });

          // event.key === "Enter" && setCityName("hadera");
        }}
        onChange={(event) => {
          console.log(event);
          setCityName({ ...cityInfo, cityName: event.target.value });

          // event.key === "Enter" && setCityName("hadera");
        }}
        value={[cityInfo.cityName]}
        label="City"
      ></TextField>
      <TextField
        disabled
        defaultValue={props.country_name}
        label="Country"
      ></TextField>
      <br />
      <br />
      <iframe
        width={"600"}
        height={"450"}
        frameBorder={"0"}
        style={{ border: 0 }}
        src={
          "https://www.google.com/maps/embed/v1/search?q=" +
          cityInfo.lookForCity +
          "&key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
