import React from "react";
import star from '../../assets/images/star.svg'
import stargrey from '../../assets/images/stargrey.svg'

function Rating({ rating }) {
    const stars = [];
    const note = { rating }.rating;
    console.log({ star })

    for (let i = 0; i < 5; i++) {
        if (i < note) {
            stars.push({ star }.star);
        } else {
            stars.push({ stargrey }.stargrey);
        }

    }


    const starsList = stars.map((star, index) =>
        <img className="star" alt='star' key={index} src={star}></img>)

    return (
        <div>
            {starsList}
        </div>
    )
}

export default Rating