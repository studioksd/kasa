import React from 'react'
import '../styles/404.css'
function PageNotFound() {
    return (<div className='container404'>
        <div className='notfound'>404</div>
        <div className='subtext'>Oups! La page que vous avez demandé n'existe pas.</div>
        <a className='back' href='/'>Retourner sur la page d'accueil</a>
    </div>);
}

export default PageNotFound