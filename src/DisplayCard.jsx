import React, { useState } from 'react';

function DisplayCard(props) {
    // State to track hover status
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic style based on hover state
    const containerStyle = {
        width: '50%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '20px',
        padding: '20px',
        borderRadius: '8px',
        color: 'white',
        textAlign: 'center',
        transition: 'background 0.5s ease',
        backgroundImage: isHovered ? 'none' : `url(${props.image})`,
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
        cursor: 'pointer', 
    };

    return (
        <>
        <a 
            href={props.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }} // Remove default anchor underline
        >
            <div 
                className="container" 
                style={containerStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span>{props.title}</span>
                <dd>{props.desc}</dd>
            </div>
        </a>
        </>
    );
}

export default DisplayCard;
