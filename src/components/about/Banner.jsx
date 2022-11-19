import React from "react";
import img from "../../assets/images/aboutbanner.png"

function Banner() {
    return (
        <div className="bannerdiv">
            <img className='aboutbanner' src={img} alt='Bannière'></img>
        </div>
    )
}

export default Banner