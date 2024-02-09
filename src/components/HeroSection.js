import React from "react";
import "../styles/herosection.css";
const image_here = require("../static/images/hero.png")

const HeroSection = () => {
    return (
        <>
            <section className="hero_section">
                <div className="innerhero_section_wrapper">
                    <div className="left_content">
                        <h2 className="intro">I'm <span>Ankit Kashte</span>, web developer</h2>
                        <p className="intro_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="btn_group">
                            <div className="btn_primary">about</div>
                            <div className="btn_secondary">Download CV</div>
                        </div>
                    </div>
                    <div className="right_image">
                            <div className="image_here">
                                <img src={image_here} alt="hero" />
                            </div>
                            <div className="redirect_arrow">
                                <i class="fi fi-ss-location-arrow icon"></i>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;