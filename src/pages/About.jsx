import React from 'react'
import Collapse from '../components/Collapse'
import '../styles/About.css'
import Banner from '../components/about/Banner'

function About() {
    return (
    <div className='aboutmaincontainer'>
        <Banner />
    <div className='aboutcontainer'>
        <Collapse className='apropos-collapse' titleClassName='apropos-collapsetitle' txtClassName='apropos-txt' title='Fiabilité' greyClassName='dropdowngrey-about' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'/>
        <Collapse className='apropos-collapse' titleClassName='apropos-collapsetitle' txtClassName='apropos-txt' title='Respect' greyClassName='dropdowngrey-about' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
        <Collapse className='apropos-collapse' titleClassName='apropos-collapsetitle' txtClassName='apropos-txt' title='Service' greyClassName='dropdowngrey-about' content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Collapse className='apropos-collapse' titleClassName='apropos-collapsetitle' txtClassName='apropos-txt' title='Sécurité' greyClassName='dropdowngrey-about' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>    
    </div>);
}

export default About