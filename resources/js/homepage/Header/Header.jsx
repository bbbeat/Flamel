import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const [locations, setLocation] = useState([]);

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

    const handleLogout = async (event) => {
        event.preventDefault();
        const response = await fetch('/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
       
        if (response.status < 300) {
            location.href = '/';
        }
    }

    return (
        <header>

            <div className="title-logo">
                <a href=""><h1>Flamel</h1></a><br />
                <h6>Serving a Community of many to a Community of one</h6>
            </div>

            <div className="title-center">
                <div className="title-center-city" >
                    <h2>{location.id}</h2>
                    <select name="City">
                        <option value="" >Change City</option>
                        {
                            locations.map((location) => {
                                return (
                                    <option key={location.id} value={location.id}>{location.city}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="title-center-search">
                    <input type="search"></input>
                    <input type="button" value="Advanced Options"></input>
                    <input type="button" value="Search"></input>
                </div>
            </div>

            <nav>

                {
                    props.user ? (
                        <div className="user-info">
                            Logged in as { props.user.first_name} { props.user.last_name}
                            <form action="/logout" method="post" onSubmit={handleLogout}>
                                <input type="submit" value="Logout" />
                            </form>
                        </div>
                    ) : <Link to="/login">Login</Link>
                }
            </nav>

        </header>
    );
}