import React from 'react';
import './Banner.css';

function Banner() {

    function truncate(string,n) {
        return string?.length > n ? string.slice(0, n-1) + '...' : string;
    }
  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://wallpapercave.com/wp/wp2831956.png")`,
        backgroundPosition:"center center",
    }}>

        <div className="banner-contents">
            <h1 className="banner-title">
                Movie Name
            </h1>
            <div className="banner-buttons">
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className="banner-description">
                {truncate(
                    `This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description`,
                    150)}
            </h1>
        </div>

        <div className="banner-fadeButton" />

    </header>
  )
}

export default Banner