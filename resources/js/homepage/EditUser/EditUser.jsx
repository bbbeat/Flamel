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
        <div className="editUser">
            <div className="editUser-form">
                <form action="/edituser" id="edituser" method="post" onSubmit={handleSubmit}>

                    <label htmlFor="">First Name:</label><br />
                    <input type="text" name="first_name" value={values.first_name} onChange={handleChange} />
                    <br />

                    <label htmlFor="">Last Name:</label><br />
                    <input type="text" name="last_name" value={values.last_name} onChange={handleChange} />
                    <br />

                    <label htmlFor="">Profile Picture:</label><br />
                    <input type="file" name="profile_picture" value={values.profile_picture} onChange={handleChange} />
                    <br />

                    <label htmlFor="">About Yourself:</label><br />
                    <textarea type="textarea" name="bio" style={{ resize: 'none' }} value={values.bio} rows="5" cols="22" resize="none" onChange={handleChange}></textarea>
                    <br />
                    <div className="register-button">
                        <button>Register</button>
                    </div>
                </form>
            </div>
            <div className="editUser-image">
                <img src="https://images.unsplash.com/photo-1553976166-ed1f57de4813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""></img>
            </div>
        </div>

    );
}

