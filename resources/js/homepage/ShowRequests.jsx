import {
    Link,
} from 'react-router-dom';

import {useState, useEffect} from 'react';
export default function showRequests(props) {
    const [requests, setRequests] = useState(null);
    const loadRequests = async () => {
        const response = await fetch(`/api/listing/request`);
        const data = await response.json();
        setRequests(data);
    }
    useEffect(() => {
        loadRequests(); 
}, []);
    console.log(requests);
    if (requests) {
        return (
            requests.map(listing=>(
            <div className="listing-detail" key={listing.id}>
                <div className="listing-detail__top">
                    <h2 className="listing-detail__title">Title: <a href={"/listing/"+listing.id}>{listing.title}</a></h2>
                    <div className="listing-detail__user" >
                        User: <a href={"/user/"+listing.user_id}>{ listing.user  ? listing.user.first_name + ' ' + listing.user.last_name : '-' }</a>
                    </div>
                    <div className="listing-detail__offer_or_request" >Offer or a Request: {listing.offer_or_request ? 'offer' : 'request'}</div>
                    <div className="listing-detail__location" >Location: {listing.location ? listing.location.city :''}</div>
                    <div className="listing-detail__price" >Price: {listing.price}</div>  
                </div>
            </div>
        )))
    } else {
        return (
            <div>Loading</div>
        )
    }
}
