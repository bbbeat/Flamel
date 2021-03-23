import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    const { user } = props
    const [expanded, setExpanded] = useState(false);
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
                <a href="/"><img src="https://i.ibb.co/r7TLJjc/output-onlinepngtools.png" alt="Flamel"></img></a><br />
                <h5>A Community driven skills exchange marketplace</h5>
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
                    <select name="change-city" onChange={handlesLocationChange}>
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
                    <input type="search" id="searchBar" placeholder="Search for a listing"></input>
                    <form>
                        <div className="multiselect">
                            <div className="selectBox" onClick={() => { setExpanded(!expanded) }}>
                                <select>
                                    <option >Select an option</option>
                                </select>
                            </div>
                            {
                                expanded === true && (
                                    <div id="checkboxes">
                                        <label>
                                            <input type="checkbox" id="one" />
                                        </label>
                                        <label>
                                            <input type="checkbox" id="two" />
                                        </label>
                                        <label>
                                            <input type="checkbox" id="three" />
                                        </label>
                                    </div>
                                )
                            }
                        </div>
                    </form>
                    <input type="button"  value="Search"></input>
                </div>
            </div>

            <nav>
                <div className="listings-offers">
                                <Link to="/listings/offers">View Offers</Link>
                </div>
                <div className="listings-requests">
                                <Link to="/listings/requests">View Requests</Link>
                </div>
                <div className="createlisting">
                    {
                        props.user ? (
                            <div className="create-new-listing">
                                <Link to="/createlisting">Create Listing</Link>
                            </div>
                        ) : <Link to="/register">Register</Link>
                    }
                </div>
                <div className="user">
                    {
                        props.user ? (
                            <div className="user-info">
                                Logged in as { props.user.first_name} { props.user.last_name}
                                <form action="/logout" method="post" onSubmit={handleLogout}>
                                    <Link to="/edituser">Edit User</Link>
                                    <input type="submit" value="Logout" />
                                </form>
                            </div>
                        ) : <Link className="login" to="/login">Login</Link>
                    }
                </div>
            </nav>

        </header>
    );
}