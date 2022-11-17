import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Card.css'

function Card({logement}) {
    const cardImgStyle = {
        backgroundImage: 'url(' + logement.cover + ')',
      };
    return(
        <Link to={`/fiche/${logement.id}`} className='logement-link'>
        <div className="card" style={cardImgStyle}>
        <div className="title">
        {logement.title}
        </div>
        </div>
        </ Link>
    )
}

export default Card