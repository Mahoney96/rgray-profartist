import React from 'react';
import { Link } from 'react-router-dom';


class TopHeader extends React.Component {
    render(){
        return(
        <div>
                <h1>
                    <p>I am the TopHeader of the LandingPage.</p>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Store</li>
                        <li>Virtual Gallery</li>
                        <li>About the Artist</li>
                        <li>Contact</li>
                        <li>New Releases</li>
                        <li>For My Students</li>
                    </ul>
                </nav>
            </h1>
        </div>
            
        )
    }
}