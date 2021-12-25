import React from 'react'
import './Error.scss';
import Img from '../../img/NotDefaind.png';
function Error() {
    return (
        <div className="width">
            <div className="not">
            <img className={"img"} src={Img} alt="Error" />
           <span > 404 Page not found</span> 
        </div>
        </div>
    )
}

export default Error
