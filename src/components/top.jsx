import React from "react";
import {text} from '../assets/text'
function Top() {
    const imgProfile=text[0].imgProfile;
    const imgFondo=text[0].imgFondo;
    return ( 
        <>
            <div>
                <img src={imgFondo} />
                <img src={imgProfile} />
            </div>
        </>
    );
}

export default Top;