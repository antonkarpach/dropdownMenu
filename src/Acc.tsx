import React, { useState } from 'react';
// import Chevron from "./";


import './Acc.scss';


function Acc(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("null");
    const [setRotate, setRotateState] = useState("accordion__icon");

    function toggleAccordion(){
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "" ? "height" : "");
        setRotateState(setActive === "" ? "rotate" : "");
    }
    return (
        <div className={"accordion__section"}>
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
              <p className={"accordion__title"}>{props.title}</p>
                {/*<Chevron width={10} fill={"#777"} className={`${setRotate}`}/>*/}
            </button>
          <div className={`accordion__content ${setHeight}`}>
            <div
                className={"accordion__text"}
                dangerouslySetInnerHTML={{__html: props.content}}
            />
          </div>
        </div>
    );
}

export default Acc;
