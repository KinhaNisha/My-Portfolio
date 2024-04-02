import React from "react";

function DisplayCard(props) {
    return (
        <div className="container">
            <dt style={{color: 'White', fontSize: '40px',display: 'inline-block'}}>
                <span>{props.title}</span>
                <span >
                    <img
                        src={props.image}
                        alt=""
                    />
                </span>
            </dt>
            <dd>{props.desc}</dd>
        </div>
    );
};

export default DisplayCard;
