import React, { useEffect, useState } from "react";
import Card from './Card'
import '../../styles/Portfolio.css'
import logementsJSON from '../../assets/json/logements.json'

function Portfolio() {
    const [logements, setLogements] = useState([])
    useEffect(() => {
        setLogements(logementsJSON)
    }, [])

    return (
        <div className="portfolio">
            {logements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))}
        </div>
    )
}

export default Portfolio