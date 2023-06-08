import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import './HomePage.css';

function initMap() {
    const uluru = { lat: -25.363, lng: 131.044 };
    const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";
    const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
    });
    const marker = new window.google.maps.Marker({
        position: uluru,
        map,
        title: "Uluru (Ayers Rock)",
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
        });
    });
}

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
    ) : (
        <>Loading..</>
    );
}

export default MapPage;