import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

function HomePage() {
   
    return (
        <div>
            <Header />
            <div>
                <Content />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default HomePage;