import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {

    return (
        <header>

            <div className="title-logo">
                <a href=""><h1>Flamel</h1></a><br />
                <h6>Serving a Community of many to a Community of one</h6>
            </div>

            <div className="title-center">
                <div className="title-center-city" >
                    <h2>City</h2>
                    <select name="City">
                        <option value="" selected="">Change City</option>
                        <option value="city">Brno</option>
                        <option value="city">Ostrava</option>
                        <option value="city">Plzeň</option>
                        <option value="city">Liberec</option>
                        <option value="city">Olomouc</option>
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