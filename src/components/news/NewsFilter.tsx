import React from "react";
import "./NewsFilter.scss";
import Radio from "../radio/Radio";
import {radioNames} from "./services/sort.service";

interface Props {
    onRadioClick: (value: any) => void;
}


const NewsFilter: React.FC<Props> = props => {
    const getRadioName = () => {
        // return console.log(props.title)
    };
    return(
        <div className="NewsFilter" >
            <Radio title={radioNames[0]} onRadioClick={props.onRadioClick} id="g1" name="radio"/>
            <Radio title={radioNames[1]} onRadioClick={props.onRadioClick} id="g2" name="radio"/>
        </div>
    );
};

export default NewsFilter;
