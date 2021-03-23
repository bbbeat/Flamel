import React from 'react';

export default function Footer(props) {

    return (

        <footer>
            <nav>
                <div className="about">
                    <a href="/about">About Us</a>
                </div>


                <div className="contact">
                    <a href="/contact">Contact Us</a>
                </div>

                <div className="icons">
                    <div className="icon twitter">
                        <a href="https://www.twitter.com"><img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt=""/></a>
                    </div>
                    <div className="icon linkedin">
                        <a href="https://www.linkedin.com"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
                    </div>
                    <div className="icon facebook">
                        <a href="https://www.facebook.com"><img src="https://img.icons8.com/color/48/3498DB/facebook.png"/></a>
                    </div>
                    <div className="icon instagram">
                        <a href="https://www.instagram.com"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
                    </div>

                </div>
            </nav>
        </footer>
    );
}