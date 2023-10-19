import React from "react";
import {text} from '../assets/text'
import './styles/general.css'
function Top() {
    const imgProfile=text[0].imgProfile;
    const imgFondo=text[0].imgFondo;
    return ( 
        <>
            <div className="top">
                <img src={imgFondo} />
                <img src={imgProfile} />
            </div>
        </>
    );
}

export default Top;