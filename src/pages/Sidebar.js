import React, { useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function Sidebar({ handleLocationClick, handleBackToMapClick, handleMyLocationClick }) {
    useEffect(() => {
        const h1 = document.querySelector("h1,h2");
        if (h1) {
            runEffect(h1);
        }
    }, []);

    const handleHover = (event) => {
        const h1 = event.target;
        if (h1) {
            runEffect(h1);
        }
    };

    const runEffect = (h1) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            h1.innerText = h1.dataset.value
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return h1.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= h1.dataset.value.length) {
                clearInterval(interval);

            }

            iteration += 1 / 3;
        }, 20);
    };

    return (
        <div>
            <h1 data-value="URBAN-EXPLORER" onMouseOver={handleHover}>
                URBAN-EXPLORER
            </h1>
            <h2 onClick={handleBackToMapClick}>Map</h2>
            <h2 onClick={handleLocationClick}>Add Location</h2>
            <h2 onClick={handleMyLocationClick}>MyLocation</h2>

            <h2 className="button">login</h2>
        </div>
    );
}

export default Sidebar;