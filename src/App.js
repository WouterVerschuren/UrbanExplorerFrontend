import React, { useState } from "react";
import MapPage from "./pages/MapPage";
import Sidebar from "./pages/Sidebar";
import AddLocation from "./pages/AddLocation";
import MyLocation from "./pages/MyLocations";
import LocationCrud from "./pages/LocationCrud"; // Import the LocationCrud component from the correct file

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

  const handleLocationCrudClick = () => {
    setLocation("locationCrud");
  };

  return (
    <div className="parent">
      <div className="sidebar child">
        <Sidebar
          handleLocationClick={handleLocationClick}
          handleBackToMapClick={handleBackToMapClick}
          handleMyLocationClick={handleMyLocationClick}
          handleLocationCrudClick={handleLocationCrudClick} // Pass the new handler function
        />
      </div>
      <div className="child map">
        {location === "map" && <MapPage />}
        {location === "add" && <AddLocation />}
        {location === "mylocation" && <MyLocation />}
        {location === "locationCrud" && <LocationCrud />}
      </div>
    </div>
  );
}

export default App;
