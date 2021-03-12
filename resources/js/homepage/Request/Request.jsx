import React, { useState, useEffect } from 'react';

export default function Request(props) {

    const [{ loading, loaded, data }, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const url = '/api/books/latest'; // fill this in

    const loadData = async () => {
        if (url) {
            setDataState({
                loading: true,
                loaded: false,
                data: null
            });

            const response = await fetch(url);
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])


    let content = '';

    if (loading) {
        content = (
            <div className="message">
                <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    } else if (loaded) {

        content = (
            <>
                <ul className="listing-list">
                    {
                        data.map(listing => {
                            return (
                                <li key={listing.id} className="listing-list__listing">
                                    <div className="listing-list__-info">

                                        <h2 className="listing-list__list-title">{listing.title}</h2>
                                        <p className="listing-list_list-description">{listing.description}</p>
                                        <h3 className="listing-list__list-location">{listing.location}</h3>
                                        <h4 className="listing-list__list-price">{listing.price}</h4>
                                        <h5 className="listing-list__list-method-of-transfer">{listing.method_of_transfer}</h5>


                                        <div className="listing-list__listing-comments">
                                            {
                                                listing.comments.map((user, i) => {
                                                    return (i !== 0 ? ', ' : '') + comments.listing;
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="listing-list__listing-pictures">
                                        <img src={listing.picture} alt={listing.title + ' poster'} />
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </>
        )
    }

    return (
        <section className="latest-listing">

            <h2>Our Serivces</h2>

            { content}

        </section>
    );
}