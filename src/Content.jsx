import React from "react";
import Projects from "./MyProjectData";
import DisplayCard from "./DisplayCard";

function createCard(data) {
    return <DisplayCard
        title={data.title}
        image={data.image}
        link={data.link}
        desc={data.description}
    />
}

const Content = () => {

    return (
        <div className="main-containter">
            <div className="about">
                <h2>About Me</h2>
                <p>Hi, I'm Nisha.
                    I am persuing my MCA from Indira Gandhi University, New Delhi.
                    <h3>Interests:</h3>
                    <p>I am interested in Full Stack Development.</p>
                    <h3>My Skills:</h3>
                    <p>Node.js, Java Script, Express, React.js, C, C++, Python, My SQL.<br />
                        I have good knowledge of Data Structure and Algorithms.<br />
                        I am a good learner.
                    </p>
                    <h3>Hobbies:</h3>
                    <p>Book Reading.<br />
                        Learning new things.<br />
                        Travelling and Adventure.
                    </p>
                </p>
            </div>
            <div className="about">
                <h2>My Projects</h2>
                <dl className="dictionary">
                    {Projects.map(createCard)}
                </dl>
            </div>
        </div>
    )
}

export default Content;