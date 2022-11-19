import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Carrousel from '../components/fiche/Carrousel'
import Tag from '../components/fiche/Tag'
import Rating from '../components/fiche/Rating'
import Collapse from '../components/Collapse'
import '../styles/Fiche.css'

function Fiche() {
    const params = useParams();
    const [logement, setLogement] = useState({
        pictures:[], 
        title:"", 
        location:"",
        description:"",
        host: {
            name:"",
            picture:""
        },
        rating:"",
        equipments:[],
        tags:[]
    })
    useEffect(() => {
        axios.get('../logements.json')
        .then((res) => {
            res.data.forEach(data => {
                if (data.id === params.id) {
                    setLogement(data);
                }
            })
        })
    },[params])

    console.log(logement)
    const tagList = logement.tags.map((tag, index) => 
    <Tag key={index} tag={tag} />);

    const equipementList = logement.equipments.map((equipement) => 
        <li>{equipement}</li>
    );

    console.log(logement.description)

    return (
<div className='fiche-body'>

    <Carrousel pics={logement.pictures} />
    <div className='fiche-info-container'>
    <div className='title-container'> 
        <div className='titlelocation'>
            <div className='titlel'>{logement.title}</div>
            <div className='location'>{logement.location}</div>
        </div>
        <div className='tags'>
        {tagList}
        </div>
        
    </div>

    <div className='tags-rating-container'>
    <div className='host'>
            <div className='hostname'>{logement.host.name}</div>
            <img className='hostpic' src={logement.host.picture} alt={logement.host.name}></img>
        </div>
        <div className='rating'>
            <Rating rating={logement.rating} />
        </div>
    </div>
    </div>
    <div className='dropdowntitlecontainer'>
        
        <Collapse className='collapsecontainer' titleClassName='dropdowntitle' txtClassName='dropdowntxt' title='Description' content={logement.description} />
        <Collapse className='collapsecontainer' titleClassName='dropdowntitle' txtClassName='dropdowntxt' title='Equipements' content={equipementList} />
            
    </div>

</div>
    );
}

export default Fiche