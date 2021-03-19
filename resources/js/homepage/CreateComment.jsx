import React, { useState, useEffect } from 'react';
import {
    useParams
} from 'react-router-dom';

export default function CreateComment(props) {
    let {listing_id} = useParams();
    const [{ comment}, setValues] = useState({
        comment: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = { comment };
        const response = await fetch('/api/createcomment/'+listing_id, {
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
            location.href = "/listing/"+listing_id;   
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['comment'],
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
        <form action="/createcomment" method="post" onSubmit={handleSubmit}>

            <label htmlFor="">Comment:</label><br />
            <textarea type="textarea" name="comment" style={{ resize: 'none' }} rows="5" cols="22" resize="none" value={comment} onChange={handleChange}></textarea>
            <br />
            <button>Post Comment</button>
        </form>
    );
}