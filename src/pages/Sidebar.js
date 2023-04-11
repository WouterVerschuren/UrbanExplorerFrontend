import React from "react";

function Sidebar({ handleLocationClick, handleBackToMapClick }) {
    return (
        <div>
            <h1>URBAN-EXPLORER</h1>

            <h2 onClick={handleBackToMapClick}>Map</h2>
            <h2 onClick={handleLocationClick}>Add Location</h2>
        </div>
    );
}

export default Sidebar; 