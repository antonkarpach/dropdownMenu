import React, {ChangeEvent, useMemo} from "react";
import './radio.scss';
import Label from "../Label";
import SortService from "../news/services/sort.service";
import {ChangeTagFields} from "../news/ChangeTagFields";

interface Props {
    label: string;
    id: string;
    name?: string;
    value: string;
    onChange: (value: ChangeTagFields) => void;
}

const Radio: React.FC<Props> = props => {
    const onChange = (event: any) => {
        props.onChange(event.target.value);
    };
    return (
        <div className="Checkbox">
            <input type="radio" id={props.id} onChange={onChange} name={props.name} value={props.value}/>
            <Label htmlFor={props.id}>{props.label}</Label>
        </div>
    );
};

Radio.defaultProps = {};

export default Radio;
