import React, { useState } from "react";
import "./Events.css";

const Events = () => {

    // useState to change the background color
    const color = "rgb(184, 186, 53)";
    const [bg, setBg] = useState(color);

    // useState to change the name of the button
    const [name , setName] = useState('Click Me');
 
    const bgChange = () => {
        // console.log("clicked");
        let newBg = "#34495e";
        setBg(newBg);
        setName("Ouch!! 😱");
    }

    const bgBack = () => {
    //   let newBg = "rgb(184, 186, 53)";
      setBg(color);
      setName("Ayyo!! 😠");
    };
 
    return (
        <>
            <div style={{ backgroundColor: bg}}>
                <button onMouseOver={bgChange} onMouseLeave={bgBack} >{ name }</button>
            </div>
        </>
    ); 
}

export default Events;