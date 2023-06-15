import { render, screen, waitFor } from '@testing-library/react';
import { useEffect, useState } from "react";
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

describe('MapPage', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('should fetch and set locations data correctly', async () => {
        const fakeData = [
            { id: 1, latitude: 51.4522206, longitude: 5.4820865 },
            { id: 2, latitude: 52.370216, longitude: 4.895168 },
        ];

        fetchMock.mockResponseOnce(JSON.stringify(fakeData)); // Mock the API response

        const TestComponent = () => {
            const [setLocations] = useState([]);

            useEffect(() => {
                fetch("https://urbanexplorerapi.azurewebsites.net/api/location")
                    .then((response) => response.json())
                    .then((data) => {
                        setLocations(data);
                    })
                    .catch((err) => console.log(err));
            }, []);
        };
    });
});
