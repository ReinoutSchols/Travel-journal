import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        <div className='Card'>
            <img className="Card--image" src={props.imageUrl} alt="Location Image" />
            <div className='Card--content'>
                <section className="Card--location">
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#f55a5a' }} />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} className='Card--link' target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </section>
                <h2 className='Card--title'>{props.title}</h2>
                <section className="Card--date">
                    <h3>{props.startDate}-{props.endDate}</h3>
                </section>
                <p className='Card--description'>{props.description}</p>
            </div>
        </div>
    );
}

