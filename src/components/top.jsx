import React from "react";
import {text} from '../assets/text'
function Top() {
    const imgProfile=text[0].imgProfile;
    const fondo=text[0].fondoPre;
    return ( 
        <>
            <div>
                <img src={fondo} />
                <img src={imgProfile} />
            </div>
        </>
    );
}

export default Top;