import React, { useState } from "react";
import MapPage from "./pages/MapPage";
import Sidebar from "./pages/Sidebar";
import AddLocation from "./pages/AddLocation";
import MyLocation from "./pages/MyLocations";

function App() {
  const [location, setLocation] = useState("map");

  const handleLocationClick = () => {
    setLocation("add");
  };

  const handleBackToMapClick = () => {
    setLocation("map");
  };

  const handleMyLocationClick = () => {
    setLocation("mylocation");
  };


  // const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];
  // let currentColorIndex = 0;

  // setInterval(() => {
  //   const transitionDuration = 1; // duration of the transition in seconds
  //   const delay = 0.1; // delay before the transition starts in seconds
  //   document.body.style.transition = `background-color ${transitionDuration}s ease-in-out ${delay}s`;
  //   document.querySelector('.sidebar').style.transition = `background-color ${transitionDuration}s ease-in-out ${delay}s`;
  //   document.body.style.backgroundColor = colors[currentColorIndex];
  //   document.querySelector('.sidebar').style.backgroundColor = colors[currentColorIndex];
  //   currentColorIndex = (currentColorIndex + 1) % colors.length;
  // }, 1000); // total duration of each cycle in milliseconds

  return (
    <div className="parent">
      <div className="sidebar child">
        <Sidebar
          handleLocationClick={handleLocationClick}
          handleBackToMapClick={handleBackToMapClick}
          handleMyLocationClick={handleMyLocationClick}
        />
      </div>
      <div className="child map">
        {location === "map" && <MapPage />}
        {location === "add" && <AddLocation />}
        {location === "mylocation" && <MyLocation />}
      </div>
    </div>
  );
}

export default App;