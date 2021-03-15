import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {

    return (

        <footer>

            {/* <h1>Flamel<br />Book<br />Database</h1> */}
            {/* 
            <div className="title-about">
              
            </div> */}


            {/* <div className="title-left">




                <div className="title-left-about" >
                    <h2>About Us</h2>

                </div>


                <div className="title-center-search">
                    <input type="search"></input>
                    <input type="button" value="Search"></input>
                </div>

            </div> */}

            <nav>


                <a href="/about">About Us</a>

                <a href="/contact">Contact Us</a>


                {
                    props.user ? (
                        <div className="user-info">
                            Logged in as { props.user.name}
                        </div>
                    ) : <Link to="/home/login">Login</Link>
                }

            </nav>

        </footer>
    );
}