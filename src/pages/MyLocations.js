import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import './HomePage.css';
import LocationCrud from "./LocationCrud";

function MyLocations() {
    const [data, setLocations] = useState([]);

    useEffect(() => {
        fetch("https://urbanexplorerapi.azurewebsites.net/api/location")
            .then((response) => response.json())
            .then((data) => {
                setLocations(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
    });

    const center = {
        lat: 51.4522206,
        lng: 5.4820865,
    };

    const handleLocationClick = (locationId) => {
        // Perform the CRUD operations or any other desired action based on the locationId
        console.log(`Location clicked with ID: ${locationId}`);
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{
                height: "100%",
                width: "100%",
            }}
            center={center}
            zoom={5}
            options={{
                mapId: "806cab83403e7a7",
            }}
        >
            {data.map((location) => (
                <Marker
                    key={location.id}
                    position={{ lat: location.longtitude, lng: location.latitude }}
                    icon={{
                        url: location.checked
                            ? "https://i.imgur.com/YlABihL.png"
                            : "https://i.imgur.com/KInnqDU.png",
                        scaledSize: { width: 60, height: 60 },
                    }}
                    onClick={() => handleLocationClick(location.id)}
                />
            ))}
        </GoogleMap>
    ) : (
        <>Loading..</>
    );
}

export default MyLocations;
