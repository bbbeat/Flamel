import {
    Link,
} from 'react-router-dom';

import {useState, useEffect} from 'react';
export default function ShowOffers(props) {
    const [offers, setOffers] = useState(null);
    const loadOffers = async () => {
        const response = await fetch(`/api/listing/offer`);
        const data = await response.json();
        setOffers(data);
    }
    useEffect(() => {
        loadOffers(); 
}, []);

    if (offers) {
        return (
            offers.map(listing=>(
            <div className="offer-detail" key={listing.id}>
                <div className="offer-detail__top">
                    <h2 className="offer-detail__title">Title: <a href={"/listing/"+listing.id}>{listing.title}</a></h2>
                    <div className="offer-detail__user" >
                        User: <a href={"/user/"+listing.user_id}>{ listing.user  ? listing.user.first_name + ' ' + listing.user.last_name : '-' }</a>
                    </div>
                    <div className="offer-detail__offer_or_request" >Offer or a Request: {listing.offer_or_request ? 'offer' : 'request'}</div>
                    <div className="offer-detail__location" >Location: {listing.location ? listing.location.city :''}</div>
                    <div className="offer-detail__price" >Price: {listing.price}</div>  
                </div>
            </div>
        )))
    } else {
        return (
            <div>Loading</div>
        )
    }
}
