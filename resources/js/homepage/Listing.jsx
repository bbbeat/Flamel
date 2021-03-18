import {
    Link,
    useParams
} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Listing(props) {
    let {listing_id} = useParams();
    const [listing, setListing] = useState(null);
    const loadListing = async () => {
        const response = await fetch(`/api/listing/${listing_id}`);
        const data = await response.json();
        setListing(data);
    }
    useEffect(() => {
        loadListing(); 
}, []);

    // const { listing_id, listing } = props;
    if (listing) {
        return (
        
            <div className="listing-detail">
    
                <div className="listing-detail__top">
                    <h1 className="listing-detail__title">Title: {listing.title}</h1>
                </div>
    
                <div className="listing-detail__main">
                    <div className="listing-detail__left">
                        <div className="listing-detail__user" >User: { listing.user  ? listing.user.first_name + ' ' + listing.user.last_name : '-' }</div>
                        <div className="listing-detail__description" >Description: {listing.description}</div>
                        <div className="listing-detail__offer_or_request" >Offer or a Request: {listing.offer_or_request ? 'offer' : 'request'}</div>
                        <div className="listing-detail__location" >Location: {listing.location ? listing.location.city :''}</div>
                        <div className="listing-detail__method" >Method of Transfer: {listing.method_of_transfer ? listing.method_of_transfer.method : ''}</div>
                        <div className="listing-detail__price" >Price: {listing.price}</div>  
                    </div>
    
                    <div className="listing-detail__right">
                         {/* <div className="listing-detail__image">
                            <img src={listing.image} alt="" />
                        </div> */}
                    </div>
                </div>
                <div className="listing-detail__comment">
                    <h2>Comments</h2>
                    {/* <Link to={`/listing/${listing.id}/comment`}>Comment on this listing</Link>
                            {
                                listing.comments.length ? (
                                    listing.comments.map(comment => (
                                        <div className="listing-detail__comment">
                                            <div className="listing-detail__comment-text">{comment.text}</div>
                                        </div>
                                    ))
                                ) : (
                                    <p>There are no comments yet. <Link to={`/listing/${listing.id}/comment`}>Be the first one to comment this listing.</Link></p>
                                )
                    } */}
    
                </div>
                <div className="listing-detail__bot">
                    <button>Make Transaction</button>
                </div>
    
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}