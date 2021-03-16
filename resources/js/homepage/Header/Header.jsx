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
                            Logged in as { props.user.name}
                        </div>
                    ) : <Link to="/home/login">Login</Link>
                }
            </nav>

        </header>
    );
}