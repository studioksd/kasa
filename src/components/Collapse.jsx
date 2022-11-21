import React, { useState } from 'react'
import down from '../assets/images/collapsedown.svg'
import up from '../assets/images/collapseup.svg'


function Collapse(props) {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };

    let arrow;
    
    if (open) {
        arrow = <img className='collapsearrow' src={up} alt='down arrow' onClick={toggle} />
    } else {
        arrow = <img className='collapsearrow' src={down} alt='down arrow' onClick={toggle} />
    }

    return(
        <div className={props.className}>
        <div className='dropdown'>

        <div className={props.titleClassName}>
            {props.title}
        </div>
        {arrow}
        </div>

        {open && (
            <div className={props.greyClassName}>
            <div className={props.txtClassName}>{props.content}</div>
            </div>
            
        )}
        </div>
        
    )
}

export default Collapse