import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import './HomePage.css';



function MapPage() {
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

    return isLoaded ? (
        <div data-testid="MapPage-1">
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
                {data.map((location) => (
                    <MarkerF
                        key={location.id}
                        position={{ lat: location.longtitude, lng: location.latitude }}
                        icon={{
                            url: location.checked ? "https://i.imgur.com/YlABihL.png" : "https://i.imgur.com/KInnqDU.png",
                            //https://i.imgur.com/YlABihL.png
                            //https://i.imgur.com/KInnqDU.png
                            scaledSize: { width: 60, height: 60 },
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    ) : (
        <>Loading..</>
    );
}

export default MapPage;