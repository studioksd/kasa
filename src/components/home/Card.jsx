import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Card.css'

function Card({logement}) {
    return(
        <Link to={`/fiche/${logement.id}`} className='logement-link'>
        <div className="card">
        <img src={logement.cover} alt={logement.title} className='logement-img'/>
        <div className="title">
        {logement.title}
        </div>
        </div>
        </ Link>
    )
}

export default Card