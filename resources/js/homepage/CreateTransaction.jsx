import React, { useState, useEffect } from 'react';
import {
    useParams
} from 'react-router-dom';

export default function CreateTransaction(props) {
    let { listing_id } = useParams();
    const [{ transaction }, setValues] = useState({
        transaction: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = { transaction };
        const response = await fetch('/api/transcation/' + listing_id, {
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
            location.href = "/listing/" + listing_id;
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['transaction'],
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
                <div className="transaction-button">
                    <button>Create Transaction</button>
                </div>
            </form>
        </div>
    );
}