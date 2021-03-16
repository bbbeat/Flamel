import React, { useState, useEffect } from 'react';

export default function Register(props) {

    const [locations, setLocation] = useState([]);

    const [{first_name, last_name, email, location_id, birth_date, phone_number, profile_picture, bio, password, password_confirmation}, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        location_id: '',
        birth_date: '',
        phone_number: '',
        profile_picture: '',
        bio: '',
        password: '',
        password_confirmation: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = {first_name, last_name, email, location_id, birth_date, phone_number, profile_picture, bio, password, password_confirmation};
        const response = await fetch('/register', {
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
            location.href = '/'; // redirect to /
            // location.reload(); // refresh the current page
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['first_name', 'last_name', 'email', 'location_id', 'birth_date', 'phone_number', 'profile_picture', 'bio', 'password', 'password_confirmation'],
              name  = event.target.name,
              value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return ({...prev_values,
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

    return (
        <form action="/register" method="post" onSubmit={ handleSubmit }>

            <label htmlFor="">First Name:</label><br />
            <input type="text" name="first_name" value={ first_name } onChange={ handleChange } />
            <br />

            <label htmlFor="">Last Name:</label><br />
            <input type="text" name="last_name" value={ last_name } onChange={ handleChange } />
            <br />

            <label htmlFor="">Email:</label><br />
            <input type="email" name="email" value={ email } onChange={ handleChange } />
            <br />

            <label htmlFor="">Location:</label><br />
            <select  name="location_id" value={ location_id } onChange={ handleChange } >
                <option value="" >Change City</option>
                {
                    locations.map((location) => {
                        return(
                            <option key={location.id} value={location.id}>{location.city}</option>
                        )
                    })
                }
            </select>
            <br />

            <label htmlFor="">Birth date:</label><br />
            <input type="date" name="birth_date"  value={ birth_date } onChange={ handleChange } />
            <br />

            <label htmlFor="">Phone Number:</label><br />
            <input type="text" name="phone_number" min="9" maxLength="13" value={ phone_number } onChange={ handleChange } />
            <br />

            <label htmlFor="">Profile Picture:</label><br />
            <input type="file" name="profile_picture" value={ profile_picture } onChange={ handleChange } />
            <br />

            <label htmlFor="">About Yourself:</label><br />
            <textarea type="textarea" name="bio" style={{ resize:'none'}} rows="5" cols="22" resize="none" value={ bio } onChange={ handleChange }></textarea>
            <br />

            <label htmlFor="">Password:</label><br />
            <input type="password" name="password" value={ password } onChange={ handleChange } />
            <br />

            <label htmlFor="">Confirm password:</label><br />
            <input type="password" name="password_confirmation" value={ password_confirmation } onChange={ handleChange } />
            <br />

            <button>Register</button>

        </form>
    ); 
}