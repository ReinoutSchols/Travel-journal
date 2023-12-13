import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        <div>
            <img className="Card--image" src={props.imageUrl} alt="image of holiday destination" />
            <section>
                {/* Use FontAwesomeIcon for rendering the icon */}
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{props.location}</p>
            </section>
            <h2>{props.title}</h2>
            <section className="Card--date">
                <h3>{props.startDate}-{props.endDate}</h3>
            </section>
            <p className='Card-description'>{props.description}</p>
            <p className='Card--country'>{props.location}</p>
            <p className='Card--link'>{props.googleMapsUrl}</p>
        </div>
    );
}
