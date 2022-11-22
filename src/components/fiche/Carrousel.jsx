import React, { useEffect, useState } from "react";
import '../../styles/Carrousel.css'
import arrowback from '../../assets/images/arrowback.svg'
import arrowfwd from '../../assets/images/arrowfwd.svg'

function Carrousel({ pics }) {

    const [count, setCount] = useState(0)

    let totalPics = { pics }.pics.length

    useEffect(() => {

        if (totalPics < count + 1) {
            setCount(0);
        } else if (0 > count) {
            setCount(totalPics - 1);
        }
    }, [count, totalPics])



    return (
        <div className="carrousel">
            <img className='carrouselpic' src={pics[count]} alt='Fiche'></img>
            { (totalPics > 1) && (<><div className="arrowcontainer">
                <img className="arrowback" src={arrowback} alt="arrow back" onClick={() => setCount(count - 1)}></img>
                <img className="arrowfwd" src={arrowfwd} alt="arrow forward" onClick={() => setCount(count + 1)}></img>
            </div><div className="numbercontainer">
                    <div className="slidenumber">{count + 1} / {pics.length} </div>
                </div></>)

            }
            

        </div>
    )
}

export default Carrousel