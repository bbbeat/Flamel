import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const { user } = props
    const [locations, setLocation] = useState([]);
    const [location_id, setLocation_id] = useState(user ? user.location_id : null)
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
    useEffect(() => {
        if (props.user) {
            setLocation_id(props.user.location_id)
        }
    }, [props.user]);

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
            window.location.href = '/';
        }
    }
    const handlesLocationChange = event => {
        setLocation_id(event.target.value);
    }
    const location = locations.find(loc => loc.id == location_id)
    return (
        <header>

            <div className="title-logo">
                <a href=""><h1>Flamel</h1></a><br />
                <h6>Serving a Community of many to a Community of one</h6>
            </div>

            <div className="title-center">
                <div className="title-center-city" >
                    <>
                        {
                            location ? (
                                <div className="city">
                                    <h2>{location.city}</h2>
                                </div>
                            ) : <h2>Prague</h2>
                        }
                    </>
                    <select name="change_city" onChange={handlesLocationChange}>
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
                   <Link to="/edituser">User</Link>
            </nav>

         

        </header>
    );
}