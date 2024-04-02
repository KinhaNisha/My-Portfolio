import React, { useState } from 'react';

function DisplayCard(props) {
    // State to track hover status
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic style based on hover state
    const containerStyle = {
        width: '30%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '20px',
        padding: '20px',
        borderRadius: '8px',
        color: 'white',
        textAlign: 'center',
        transition: 'background 0.5s ease',
        backgroundImage: isHovered ? 'none' : `url(${props.image})`,
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.7)' : 'transparent', // Optional: background color when image is hidden
    };

    return (
        <div 
            className="container" 
            style={containerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span>{props.title}</span>
            <dd>{props.desc}</dd>
            <a href={props.link} aria-label={`Learn more about ${props.title}`} target="_blank" rel="noopener noreferrer"></a>
        </div>
    );
}

export default DisplayCard;
