import React, { useState } from "react";
import MapPage from "./pages/MapPage";
import Sidebar from "./pages/Sidebar";
import AddLocation from "./pages/AddLocation";

function App() {
  const [location, setLocation] = useState("map");

  const handleLocationClick = () => {
    setLocation("add");
  };

  const handleBackToMapClick = () => {
    setLocation("map");
  };

  return (
    <div className="parent">
      <div className="sidebar child">
        <Sidebar handleLocationClick={handleLocationClick} handleBackToMapClick={handleBackToMapClick} />
      </div>
      <div className="child map">
        {location === "map" && <MapPage />}
        {location === "add" && <AddLocation />}
      </div>
    </div>
  );
}

export default App;