import './AddLocation.css';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddLocation() {
    const [name, setName] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [information, setInformation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Name: name,
            Longitude: longitude,
            Latitude: latitude,
            Information: information,
        };

        axios
            .post('https://urbanexplorerapi.azurewebsites.net/api/location', data)
            .then((response) => {
                console.log(response.data);
                toast.success('Location added');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Error adding location');
            });
    };

    return (
        <div className="vakje">
            test
            <div className="form vakje2">
                <form onSubmit={handleSubmit}>
                    <ul className="form-style-1">
                        <li>
                            <label>
                                Name of location <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                className="field-divided"
                                placeholder="name"
                            />
                        </li>
                        <li>
                            <label>
                                Longitude and Latitude <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                value={longitude}
                                onChange={(event) => setLongitude(event.target.value)}
                                className="field-divided"
                                placeholder="Longitude"
                            />
                            <input
                                type="text"
                                value={latitude}
                                onChange={(event) => setLatitude(event.target.value)}
                                className="field-divided"
                                placeholder="Latitude"
                            />
                        </li>
                        <li>
                            <label>
                                I want this place for information about the location
                                <span className="required">*</span>
                            </label>
                            <textarea
                                value={information}
                                onChange={(event) => setInformation(event.target.value)}
                                className="field-long field-textarea"
                            ></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    );
}

export default AddLocation;
