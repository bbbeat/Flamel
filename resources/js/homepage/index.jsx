import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
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
import CreateTransaction from './CreateTransaction.jsx';
import Transaction from './Transaction.jsx';
import Home from './Home.jsx';

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
                        <Route exact path="/" children={<Home />} />
                        <Route exact path="/login" children={<Login />} />
                        <Route exact path="/edituser" children={<EditUser />} />
                        <Route exact path="/register" children={<Register />} />
                        <Route exact path="/createlisting" children={<CreateListing />} />
                        <Route exact path="/createcomment/:listing_id" children={<CreateComment />} />
                        <Route exact path="/user/:user_id" children={<User />} />
                        <Route exact path="/listing/:listing_id" children={<Listing />} />
                        <Route exact path="/listings" children={<ShowListings />} />
                        <Route exact path="/listings/offers" component={()=><ShowOffers limit="10" displayButton={true}/>} />
                        <Route exact path="/listings/requests" component={()=><ShowRequests limit="10"  displayButton={true}/>} />
                        <Route exact path="/listing/:listing_id/transaction" children={<CreateTransaction />} />
                        <Route exact path="/transaction/:transaction_id" children={<Transaction />} />
                    </Switch>
                </main>
                <Footer />
            </>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
