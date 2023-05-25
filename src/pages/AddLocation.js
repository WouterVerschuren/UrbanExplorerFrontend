import './AddLocation.css';
import React, { useState } from 'react';
import axios from 'axios';

function AddLocation() {
    const [longtitude, setLongtitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [information, setInformation] = useState('');
    const [rating, setRating] = useState(0);
    const [checked, setChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            Longtitude: longtitude,
            Latitude: latitude,
            Infomation: information,
            Rating: rating,
            Checked: checked
        };
        axios.post('https://localhost:7149/api/Location', data)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div className='vakje'>
            test
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Longtitude:
                        <input type="number" value={longtitude} onChange={(event) => setLongtitude(event.target.value)} />
                    </label>
                    <br />
                    <label>
                        Latitude:
                        <input type="number" value={latitude} onChange={(event) => setLatitude(event.target.value)} />
                    </label>
                    <br />
                    <label>
                        Information:
                        <input type="text" value={information} onChange={(event) => setInformation(event.target.value)} />
                    </label>
                    <br />
                    <label>
                        Rating:
                        <input type="number" value={rating} onChange={(event) => setRating(event.target.value)} />
                    </label>
                    <br />
                    <label>
                        Checked:
                        <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddLocation;