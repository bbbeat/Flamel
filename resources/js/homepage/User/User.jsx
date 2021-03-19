import {
    Link,
    useParams
} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function User(props) {
    let {user_id} = useParams();
    const [user, setUser] = useState(null);
    const loadUser = async () => {
        const response = await fetch(`/api/user/${user_id}`);
        const data = await response.json();
        setUser(data);
    }
    useEffect(() => {
        loadUser(); 
}, []);

    if (user) {
        return (
        
            <div className="user-detail">
    
                <div className="user-detail__top">
                    <h1 className="user-detail__title">Name: {user.first_name} {user.last_name}</h1>
                </div>
    
                <div className="user-detail__main">
                    <div className="user-detail__left">
                        <div className="user-detail__email" >Email: {user.email}</div>
                        <div className="user-detail__location" >Location: {user.location ? user.location.city :''}</div>
                        <div className="user-detail__bio" >Bio: {user.bio}</div>
                        <div className="user-detail__picture" >Picture: {user.profile_picture ? user.profile_picture :''}</div> 
                        <div className="user-detail__listings" >Listings: {user.listings.map(listing=>(
                            <div className="listing">
                                <div>
                                    <div className="listing__title" >
                                        Title: <a href={"/listing/"+listing.id}>{listing.title}</a>
                                        </div>
                                    <div className="listing__description" >Description: {listing.description}</div>
                                    <div className="listing__offer_or_request" >Offer or a Request: {listing.offer_or_request ? 'offer' : 'request'}</div>
                                    <div className="listing__location" >Location: {listing.location ? listing.location.city :''}</div>
                                    <div className="listing__method" >Method of Transfer: {listing.method_of_transfer ? listing.method_of_transfer.method : ''}</div>
                                    <div className="listing__price" >Price: {listing.price}</div>
                                </div>
                            </div>
                        ))}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}