import React from "react";
import "../styles/home.styles.css"
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

const Home =()=>{
    return(
        <>
            <HeroSection />
            <Projects />
        </>
    )
}

export default Home;