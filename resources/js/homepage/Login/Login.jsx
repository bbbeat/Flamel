import React, { useState, useEffect } from 'react';

export default function Login(props) {

    const [{ email, password }, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {

        event.preventDefault();

        let request_data = { email, password };
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(request_data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const response_data = await response.json();

        if (response.status == 200) {
            location.href = '/';
        } else {
            setErrors(response_data.errors);
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['email', 'password'],
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
        <div className="login-form">
            <form action="/login" method="post" onSubmit={handleSubmit}>
                <div className="login-email">
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="email" value={email} onChange={handleChange} />
                    {
                        errors.email ? (
                            errors.email.map(error => (
                                <div key={error} className="error">{error}</div>
                            ))
                        ) : ''
                    }
                </div>

                <br />
                <div className="login-passworn">
                    <label htmlFor="">Password</label><br />
                    <input type="password" name="password" value={password} onChange={handleChange} />
                    <br />
                </div>
                <br />
                <div className="login-button">
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}