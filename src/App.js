import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import './App.css';

const center = {
  lat: 51.4522206,
  lng: 5.4820865,
};

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;

// document.querySelector("h1").onmouseover = event => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if (index < iteration) {
//           return event.target.dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");

//     if (iteration >= event.target.dataset.value.length) {
//       clearInterval(interval);
//     }

//     iteration += 1 / 3;
//   }, 30);
// }



function App() {
  const [data, setLocation] = useState({});

  useEffect(() => {
    fetch('https://localhost:7149/api/Location/1')
      .then(response => response.json())
      .then(data => {
        setLocation(data);
      })
      .catch(err => console.log(err))
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  return isLoaded ? (
    <div className="parent">
      <div className="sidebar child">
        <h1 data-value="URBANEXPLORER">URBAN-EXPLORER</h1>

        <h2>Locations</h2>
        <h2>Locations</h2>
        <h2>Locations</h2>
      </div>
      <div className="child map">
        {console.log(data)}
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          mapcontr
          center={center}
          zoom={5}
          options={{
            mapId: "806cab83403e7a7",
          }}

        >
          <MarkerF
            position={{ lat: data.longtitude, lng: data.latitude }}
            icon={{ url: "https://i.imgur.com/xaXaySl.png", scaledSize: { width: 70, height: 70 } }}
          />
        </GoogleMap>
      </div>
    </div>
  ) : (
    <>Loading..</>
  );
}



export default React.memo(App);