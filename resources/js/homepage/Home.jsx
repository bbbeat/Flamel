import {
    Link
} from "react-router-dom";

import ShowOffers from './ShowOffers.jsx';
import ShowRequests from './ShowRequests.jsx';

export default function Home() {
    return (
        <>
            <div>
                <h2>Offers:</h2>
                <ShowOffers limit="5" offset="0" displayButton={false}/>
                <Link to="/listings/offers">See more</Link>
            </div>
            <div>
                <h2>Requests:</h2>
                <ShowRequests limit="5" offset="0" displayButton={false} />
                <Link to="/listings/requests">See more</Link>
            </div>
    </>
    )
}
