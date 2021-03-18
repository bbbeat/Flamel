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
import User from './User/User.jsx';
import Register from './Register.jsx';
import CreateListing from './CreateListing.jsx';
import Listing from './Listing.jsx';

import './index.scss';

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
                        <Route exact path="/request" children={ <Request />} />
                        <Route exact path="/register" children={ <Register /> } /> 
                        <Route exact path="/createlisting" children={ <CreateListing /> } />
                        <Route exact path="/listing/:listing_id">
                            <Listing />
                        </Route> 

                    </Switch>

                </main>

                <Footer />
            </>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
