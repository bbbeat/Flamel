import React, { useState, useEffect } from 'react';

export default function CreateListing(props) {

    const [locations, setLocation] = useState([]);
    const [methods, setMethod] = useState([]);

    const [{ user_id, title, offer_or_request, description, location_id, method_of_transfer_id, price }, setValues] = useState({
        user_id: '',
        title: '',
        offer_or_request: true,
        description: '',
        location_id: '',
        method_of_transfer_id: '',
        price: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = { user_id, title, offer_or_request, description, location_id, method_of_transfer_id, price };
        const response = await fetch('/api/createlisting', {
            method: 'POST',
            body: JSON.stringify(request_data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const response_data = await response.json();

        if (Math.floor(response.status / 100) == 2) { // any kind of 2xx response code
            location.href = `/listing/${response_data[0]}`; // redirect to /
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['user_id', 'title', 'offer_or_request', 'description', 'location_id', 'method_of_transfer_id', 'price'],
            name = event.target.name,
            value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return ({
                    ...prev_values,
                    [name]: value
                });
            });
        }
    }

    const loadLocations = async () => {
        const response = await fetch('/locations', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        });
        const response_data = await response.json();
        setLocation(response_data);
    }
    useEffect(() => {
        loadLocations()
    }, []);

    const loadMethods = async () => {
        const response = await fetch('/methods', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        });
        const response_data = await response.json();
        setMethod(response_data);
    }
    useEffect(() => {
        loadMethods()
    }, []);

    return (
        <div className="create-listing">        
            <div className="create-listing-form">
                <form action="/createlisting" method="post" onSubmit={handleSubmit}>

                    <div className="create-listing-title">
                        <label htmlFor="">Listing Title:</label><br />
                        <input type="text" name="title" value={title} onChange={handleChange} />
                        <br />
                    </div>

                    <div className="create-listing-description">
                        <label htmlFor="">Listing Description:</label><br />
                        <textarea type="textarea" name="description" style={{ resize: 'none' }} rows="5" cols="22" resize="none" value={description} onChange={handleChange}></textarea>
                        <br />
                    </div>

                    <div className="create-listing-offer-or-request">
                        <label htmlFor="">Is it an Offer or a Request?</label><br />
                        <select name="offer_or_request" value={offer_or_request} onChange={handleChange} >
                            <option value={true} >Offer</option>
                            <option value={false} >Request</option>
                        </select>
                        <br />
                    </div>

                    <div className="create-listing-location">
                        <label htmlFor="">Location:</label><br />
                        <select name="location_id" value={location_id} onChange={handleChange} >
                            <option value="" >Choose Location</option>
                            {
                                locations.map((location) => {
                                    return (
                                        <option key={location.id} value={location.id}>{location.city}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                    </div>

                    <div className="create-listing-method">
                        <label htmlFor="">Method of Transfer:</label><br />
                        <select name="method_of_transfer_id" value={method_of_transfer_id} onChange={handleChange} >
                            <option value="" >Choose Method</option>
                            {
                                methods.map((method) => {
                                    return (
                                        <option key={method.id} value={method.id}>{method.method}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                    </div>

                    <div className="create-listing-price">
                        <label htmlFor="">Price:</label><br />
                        <input type="text" name="price" min="1" maxLength="4" value={price} onChange={handleChange} />
                        <br />
                    </div>

                    <div className="create-listing-button">
                        <button>Create Listing</button>
                    </div>
                </form>
            </div>
            <div className="create-listing-images">
                <img src="https://i.ibb.co/1Lq385g/placeholder.jpg" alt="placeholder" ></img>
                <img src="https://i.ibb.co/1Lq385g/placeholder.jpg" alt="placeholder" ></img>
                <img src="https://i.ibb.co/1Lq385g/placeholder.jpg" alt="placeholder" ></img>
                <img src="https://i.ibb.co/1Lq385g/placeholder.jpg" alt="placeholder" ></img>
            </div>               
      </div>      
    );
}