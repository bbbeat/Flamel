import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Request from './Request/Request.jsx';
import Provide from './Provide/Provide.jsx';
import Login from './Login/Login.jsx';
import User from './User/User.jsx';

import './index.scss';

function App() {

    const [api_token, setApiToken] = useState(localStorage.getItem('api_token'));

    const [user, setUser] = useState(null);

    const setToken = (token) => {

        setApiToken(token);

        localStorage.setItem('api_token', token);
    }

    const loadCurrentUser = async () => {
        console.log('Loading current user information');

        const response = await fetch('/api/user', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${api_token}`
            }
        });

        const data = await response.json();

        setUser(data.user);
    }

    useEffect(() => {
        if (api_token) {
            loadCurrentUser();
        }
    }, [api_token]);

    return (
        <Router>
            <>
                <Header user={user} />

                <main>
                  

                    

                    <Switch>
                        {/* 
                        <Route exact path="/home">
                            <BooksListShort />
                            <BookOfTheWeek />
                        </Route> */}

                        <Route exact path="/home/login">
                            <Login setToken={setToken} />
                        </Route>

                        <Route exact path="/home/request">
                            <Request />
                        </Route>

                    </Switch>

                </main>

                <Footer />
            </>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
