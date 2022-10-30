import React, { useEffect, useState } from "react";
import '../../styles/Carrousel.css'
import arrowback from '../../assets/images/arrowback.svg'
import arrowfwd from '../../assets/images/arrowfwd.svg'

function Carrousel({pics}) {

    const [count, setCount] = useState(0)

    const totalPics = {pics}.pics.length

    const nextPic = () => {
        if (totalPics > count+1) {
            setCount(count + 1);
            console.log('+1')
        } else {
            console.log('else')
            setCount(0);
        }
    }

    const lastPic = () => {
        if (count > 0) {
            setCount(count - 1)
            console.log('-1')
        } else {
            setCount(totalPics-1)
        }
    }

    
    return(
        <div className="carrousel">
            <img className='carrouselpic'src={pics[count]}></img>
            
        <div className="arrowcontainer">
            <img className="arrowback" src={arrowback} alt="arrow back" onClick={lastPic}></img>
            <img className="arrowfwd" src={arrowfwd} alt="arrow forward" onClick={nextPic}></img>
            </div>
        <div className="numbercontainer">
            <div className="slidenumber">{count+1} / {pics.length} </div>
        </div>
          
        </div>
    )
}

export default Carrousel