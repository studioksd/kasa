import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from './Card'
import '../../styles/Portfolio.css'

function Portfolio() {
    const [logements, setLogements] = useState([])
    useEffect(() => {
        axios.get('logements.json')
            .then((res) => setLogements(res.data))
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