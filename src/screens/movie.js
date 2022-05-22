import React from "react";
import "./movie.css";
import Nav from '../Nav';

function movie() {
    return (
        <><div className="list">
            <Nav />
            <img className="logo" src="neoflix.png" alt=""/>
            
        </div><div className="khatta-meetha">
                <h2>Khatta-Meetha</h2>
                <div className="moviebanner">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/My5L3qLhewg?start=87" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                    <br></br>
                    <p>A seemingly corrupt petty contractor faces challenges from the local municipality,</p>
                    <p>his family, his employees, as well as a former girlfriend and her family.</p>
                    
                    <br></br>
                    <h3>IMDb RATING</h3>  <p>⭐5.8/10</p>
                    <br></br>
                    <h3>Director</h3>  <p>Priyadarshan</p>
                    <br></br>
                    <h3>Writers</h3>  <p>Jay Master(dialogues), Priyadarshan(screenplay), Nitin Raikwar(lyrics)</p>
                    <br></br>
                    <h3>Stars</h3>  <p>Akshay Kumar, Trisha Krishnan, Kulbhushan Kharbanda</p>
                    <br></br>
                    <h3>Genres</h3>  <p>Comedy, Crime, Drama</p>
                    <br></br>
                    <br></br>
                    

                </div>
            </div></>
    );

}

export default movie;