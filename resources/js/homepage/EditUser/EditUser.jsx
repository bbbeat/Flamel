import React, { useState, useEffect } from 'react';

export default function EditUser(props) {

    const [editUser, setEditUser] = useState([]);
    const [location, setLocation] = useState([]);

    const [values, setValues] = useState({

        first_name: '',
        last_name: '',
        location_id: '',
        profile_picture: '',
        bio: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = { first_name, last_name, location_id, profile, bio };
        const response = await fetch('/EditUser', {
            method: 'POST',
            body: JSON.stringify(request_data),
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const response_data = await response.json();

        if (Math.floor(response.statue / 100) == 2) {
            user.href = '/'; //redirect to /
            //user.reload(); //refresh the current page
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['first_name', 'last_name', 'location_id', 'profile_picture', 'bio']
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

    // const loadLocations = async () => {
    //     const response = await fetch('/locations', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-type': 'application/json',
    //         }
    //     });
    //     const response_data = await response.json();
    //     setLocation(response_data);
    // }
    // useEffect(() => {
    //     loadLocations()
    // }, []);

    const loadUser = async () => {
        const response = await fetch('/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        });
        const response_data = await response.json();
        setValues(response_data);
    }
    useEffect(() => {
        loadUser()
    }, []);

    return (
        <form action="/edituser" method="post" onSubmit={handleSubmit}>

            <label htmlFor="">First Name:</label><br />
            <input type="text" name="first_name" value={values.first_name} onChange={handleChange} />
            <br />

            <label htmlFor="">Last Name:</label><br />
            <input type="text" name="last_name" value={values.last_name} onChange={handleChange} />
            <br />

            {/* <label htmlFor="">Location:</label><br />
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
            <br /> */}

            <label htmlFor="">Profile Picture:</label><br />
            <input type="file" name="profile_picture" value={values.profile_picture} onChange={handleChange} />
            <br />

            <label htmlFor="">About Yourself:</label><br />
            <textarea type="textarea" name="bio" style={{ resize: 'none' }} value={values.bio} rows="5" cols="22" resize="none" onChange={handleChange}></textarea>

            <br />



        </form>
    );
}