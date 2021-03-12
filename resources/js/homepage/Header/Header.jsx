import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {

    return (
        <header>

            {/* <h1>Flamel<br />Book<br />Database</h1> */}

            <div className="title-logo">
                <h1>Flamel</h1><br />
                <h4>Serving a Community of many to a Community of one</h4>
            </div>


            <div className="title-center">




                <div className="title-center-city" >
                    <h2>City</h2>

                </div>


                <div className="title-center-search">
                    <input type="search"></input>
                    <input type="button" value="Search"></input>
                </div>


            </div>





            <nav>



                <a href="/">Home</a>

                <a href="/provide">Provide</a>

                <a href="/request">Request</a>

                {/* <a href="/contact">Contact Us</a> */}



               





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