import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Request from './Request/Request.jsx';
import Provide from './Provide/Provide.jsx';
import Login from './Login/Login.jsx';
import EditUser from './EditUser/EditUser.jsx';
import Register from './Register.jsx';
import CreateListing from './CreateListing.jsx';
import CreateComment from './CreateComment.jsx';
import Listing from './Listing.jsx';
import ShowListings from './ShowListings.jsx';
import ShowOffers from './ShowOffers.jsx';
import ShowRequests from './ShowRequests.jsx';
import User from './User/User.jsx';

// import './index.scss';

function App() {

    const [user, setUser] = useState(null);


    const loadCurrentUser = async () => {
        console.log('Loading current user information');
        const response = await fetch('/api/user', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        });
        const data = await response.json();
        setUser(data.user);
    }

    useEffect(() => {
        loadCurrentUser();
    }, []);

    return (
        <Router>
            <>
                <Header user={user} />
                
                <main>

                    <Switch>

                        <Route exact path="/login" children={<Login />} />
                        <Route exact path="/edituser" children={<EditUser />} />
                        <Route exact path="/request" children={<Request />} />
                        <Route exact path="/register" children={<Register />} />
                        <Route exact path="/createlisting" children={<CreateListing />} />
                        <Route exact path="/createcomment/:listing_id" children={<CreateComment />} />
                        <Route exact path="/user/:user_id" children={<User />} />
                        <Route exact path="/listing/:listing_id" children={<Listing />} />
                        <Route exact path="/listings" children={<ShowListings />} />
                        <Route exact path="/listings/offers" children={<ShowOffers />} />
                        <Route exact path="/listings/requests" children={<ShowRequests />} />

                    </Switch>

                </main>



                <Footer />
            </>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
