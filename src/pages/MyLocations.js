import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Route, Router, useNavigate, useParams } from "react-router-dom";
import './HomePage.css';

function MyLocations() {
    const [data, setLocations] = useState([]);
    const navigate = useNavigate();

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

    const handleMarkerClick = (id) => {
        navigate(`/location/${id}`);
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
                        url: location.checked ? "https://i.imgur.com/YlABihL.png" : "https://i.imgur.com/KInnqDU.png",
                        scaledSize: { width: 60, height: 60 },
                    }}
                    onClick={() => handleMarkerClick(location.id)}
                />
            ))}
        </GoogleMap>
    ) : (
        <>Loading..</>
    );
}

function LocationPage() {
    const { id } = useParams();

    // Fetch and render the location details based on the id

    return (
        <div>
            <h1>Location {id}</h1>
            {/* Render location details */}
        </div>
    );
}

function App() {
    return (
        <Router>
            <Route exact path="/" component={MyLocations} />
            <Route path="/location/:id" component={LocationPage} />
        </Router>
    );
}

export default App;
