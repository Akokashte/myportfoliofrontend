import React from "react";
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <>
            <section className="navbar ubuntu-regular">
                <div className="navlinks">
                    <div>Home</div>
                    <div>About</div>
                    <div>Service</div>
                    <div className="logo ubuntu-bold ">Ak</div>
                    <div>Projects</div>
                    <div>Service</div>
                    <div>Contact</div>
                </div>
            </section>
        </>
    )
}

export default Navbar;