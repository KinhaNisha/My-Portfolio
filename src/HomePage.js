import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

function HomePage() {
   
    return (
        <>
            <Header />
            <div>
                <Content />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
};

export default HomePage;