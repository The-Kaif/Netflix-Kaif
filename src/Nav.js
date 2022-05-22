import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import "./Nav.css";

import { Link } 
       from "react-router-dom";

function Nav() {
const [show, handleShow] = useState(false);
const history = useHistory()

const transitionNavBar = () => {
    if(window.scrollY > 100){
        handleShow(true);
    }else{
        handleShow(false);
    }
}
// Adding New Movies From Yt





useEffect(() => {
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener('scroll',transitionNavBar);
}, []);

    return (
        <div className={`nav ${show &&"nav__black"}`}>
            <div className="nav__contents">
            <img 
            onClick={() => history.push("/")}
            className="nav__logo"
            src="neoflix.png" alt=""/>

            <img
            onClick={() => history.push("/profile")}
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
        </div>

        <div className='Movies'>
            {/* <button path=""className='yt-movie'><h2>Movie</h2></button> */}
            <Link className='yt-movie' to="/movie">
              <h3>Movie</h3>
            </Link>
            
           
        </div>


        </div>
    );
}

export default Nav;
