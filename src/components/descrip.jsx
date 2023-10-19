import React from "react";
import {text} from '../assets/text'
function Descrip() {
    const Name=text[0].name; 
    const codigo=text[0].cod;
    const gemas=text[0].gemas;
    return (   
    <>
        <div>
            <img src={gemas}/>
            <h3>{Name}</h3>
            <p>{codigo}</p>
        </div>
        
    </>
    );
}

export default Descrip;