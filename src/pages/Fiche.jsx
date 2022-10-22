import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Fiche() {
    const params = useParams();
    const [logement, setLogement] = useState({
        pictures:["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg"], 
        title:"", 
        location:"",
        description:"",
        equipments:[],
        tags:[]
    })
    useEffect(() => {
        axios.get('../logements.json')
        .then((res) => {
            res.data.forEach(data => {
                if (data.id == params.id) {
                    setLogement(data);
                }
            })
        })
    }, [])
    return (
    <div>{logement.title}</div>
    );
}

export default Fiche