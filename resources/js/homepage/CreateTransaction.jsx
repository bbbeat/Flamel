import React, { useState, useEffect } from 'react';
import {
    useParams
} from 'react-router-dom';


export default function CreateTransaction(props) {
    const [{ price }, setValues] = useState({
       
        price: ''
    })
    let { listing_id } = useParams();

    const [listing, setListing] = useState(null);
    const loadListing = async () => {
        const response = await fetch(`/api/listing/${listing_id}`);
        const data = await response.json();
        setListing(data);
        setValues({price:data.price})
    }
    useEffect(() => {
        loadListing(); 
    }, []);

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = { price };
        const response = await fetch('/api/listing/' + listing_id + '/createtransaction', {
            method: 'POST',
            body: JSON.stringify(request_data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const response_data = await response.json();

        if (Math.floor(response.status / 100) == 2) {
            location.href = `/transaction/${response_data[0]}`
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['price'],
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

    return (
        <div className="transaction-form">
            <form action="/createtansaction" method="post" onSubmit={handleSubmit}>
            <div className="transaction-price">
                    <label htmlFor="">Price:</label><br />
                    <input type="text" name="price" min="1" maxLength="4" value={price} onChange={handleChange} />
                    <br />
                </div>
                <div className="transaction-button">
                    <button>Create Transaction</button>
                </div>
            </form>
        </div>
    );
}