import React from "react";
import "./NewsFilter.scss";
import Radio from "../radio/Radio";
import {ChangeTagFields} from './ChangeTagFields';

interface Props {
    onFilterChange: (tag: ChangeTagFields) => void;
}


const NewsFilter: React.FC<Props> = props => {
    return (
        <div className="NewsFilter">
            <Radio label={ChangeTagFields.tech} id="g1" name="radio"
                   value={ChangeTagFields.tech} onChange={props.onFilterChange}/>
            <Radio label={ChangeTagFields.social} id="g2" name="radio"
                   value={ChangeTagFields.social} onChange={props.onFilterChange}/>
        </div>
    );
};

export default NewsFilter;
