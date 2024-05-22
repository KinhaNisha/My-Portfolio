import React from "react";
import image from "./my-image.jpg"

const Header = () => {
    const date = new Date();
    const currTime = date.getHours();
    console.log(currTime)
    let greet;

    if (currTime < 12) {
        greet = "Good Morning";
    }
    else if (currTime < 16) {
        greet = "Good Afternoon"
    } else {
        greet = "Good Evening"
    }
    return (
        <div>
            <div className="header">
                <img
                    id="photo"
                    alt="profile"
                    src={image}
                />
                <div className="greet-mess-box">
                    <span className="greet-mess">{greet}</span>
                    <h1>Hi, I'm Nisha Kinha </h1>
                    <p>Backend Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
