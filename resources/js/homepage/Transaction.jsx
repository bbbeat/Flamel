import {
    Link,
    useParams
} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Transaction(props) {
    let {transaction_id} = useParams();
    const [transaction, setTransaction] = useState(null);
    const loadTransaction = async () => {
        const response = await fetch(`/api/transaction/${transaction_id}`);
        const data = await response.json();
        setTransaction(data);
    }
    useEffect(() => {
        loadTransaction(); 
    }, []);
    
    if (transaction) {
        return (
            <div className="transaction-detail">
    
                <div className="transaction-detail__title">
                    <h1 className="transaction-title">Title: <a href={"/listing/"+transaction.listing.id}>{transaction.listing.title}</a></h1>
                </div>
                <div className="transaction-detail__general">
                    <h3 className="transaction-publisher">Listing Publisher: <a href={"/user/"+transaction.listing.user_id}>{transaction.listing.user.first_name} {transaction.listing.user.last_name}</a></h3>
                    <h3 className="transaction-responder">Listing Responder: <a href={"/user/"+transaction.b_user_id}>{transaction.user.first_name} {transaction.user.last_name}</a></h3> 
                    {/* need to add names */}
                    <h3 className="transaction-price">Price: {transaction.price}</h3> 
                </div>
                    
               

            </div>
    )
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}