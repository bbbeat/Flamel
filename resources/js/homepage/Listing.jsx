import {
    Link,
    useParams
} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Comment from './Comment.jsx';

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
    
    if (listing) {
        return (
            <div className="listing-detail">
    
                <div className="listing-detail__top">
                    <h1 className="listing-detail__title">Title: {listing.title}</h1>
                </div>
    
                <div className="listing-detail__main">
                    <div className="listing-detail__left">
                        <div className="listing-detail__user" >
                            User: <a href={"/user/"+listing.user_id}>{ listing.user  ? listing.user.first_name + ' ' + listing.user.last_name : '-' }</a>
                            </div>
                        <div className="listing-detail__description" >Description: {listing.description}</div>
                        <div className="listing-detail__offer_or_request" >Offer or a Request: {listing.offer_or_request ? 'offer' : 'request'}</div>
                        <div className="listing-detail__location" >Location: {listing.location ? listing.location.city :''}</div>
                        <div className="listing-detail__method" >Method of Transfer: {listing.method_of_transfer ? listing.method_of_transfer.method : ''}</div>
                        <div className="listing-detail__price" >Price: {listing.price}</div>  
                    </div>
    
                    <div className="listing-detail__right">
                          <div className="listing-detail__image">
                          <img src="https://i.ibb.co/1Lq385g/placeholder.jpg" alt="placeholder" border="0"></img>
                          <img src="https://i.ibb.co/1Lq385g/placeholder.jpg" alt="placeholder" border="0"></img>
                        </div> 
                    </div>
                </div>
                <div className="listing-detail__comment">
                    <h2>Comments:</h2>
                   
                        {
                                (listing.comments && listing.comments.length) ? (
                                    <>
                                    <Link to={`/createcomment/${listing.id}`}>Comment on this listing</Link>
                                    <div className="comments-list">
                                    {listing.comments.map(comment => (  
                                     <Comment key={comment.id}{...comment}/>   //Comment is a component
                                    ))}
                                    </div>
                                    </>
                                ) : (
                                    <p>There are no comments yet. <Link to={`/createcomment/${listing.id}`}>Be the first one to comment this listing.</Link></p>
                                )
                                
                        }
                    
                </div>
                <div className="listing-detail__bot">
                    <button>
                    <Link to={`/listing/${listing.id}/transaction`}>Make Transaction</Link>
                    </button>
                </div>
    
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}