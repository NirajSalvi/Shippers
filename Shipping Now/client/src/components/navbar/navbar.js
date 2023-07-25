import React, { useState } from "react";
import "./styles.css";
// import "../../sarthak pages/itlab_pages/my-app/src/components/ContactInfoItem"
import Logo from "./logosampletransparent.png";
// import {
//     FaFacebookSquare,
//     FaInstagramSquare,
//     FaYoutubeSquare,
// } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    console.log(props);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <img id="imglogo" src={Logo} alt="logo" width="192px" height="108px"></img>
                </div>

                {/* <div className="title">
                    <h2>
                        <span>S</span>hipping
                        <span>N</span>ow
                    </h2>
                </div> */}

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-in">Sign in</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-up">Register</NavLink>
                        </li>
                        {(props.isAdmin === true) &&
                            <li>
                            <NavLink to="/availability">Admin Panel</NavLink>
                        </li>}
                        {/* {(props === true) &&
                            <li>
                            <NavLink to="/userData">User Details</NavLink>
                        </li> } */}
                        <li>
                            <NavLink to="/myOrders">My Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tracking">tracking</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus">About us</NavLink>
                        </li>
                        
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    {/* <ul className="social-media-desktop">
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                                target="_thapa">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/thapatechnical/"
                                target="_thapa">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                                target="_thapa">
                                <FaYoutubeSquare className="youtube" />
                            </a>
                        </li>
                    </ul> */}

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

            {/* hero section  */}
            {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
        </>
    );
};

export default Navbar;