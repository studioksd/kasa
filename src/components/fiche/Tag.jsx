import React from "react";
import '../../styles/Tag.css'

function Tag({ tag }) {
    return (
        <div className="tagcontainer">
            <div className="tagtext">
                {tag}
            </div>
        </div>
    )
}

export default Tag