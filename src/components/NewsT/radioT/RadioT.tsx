import React from 'react';
import LabelT from "./LabelT";
import './RadioT.scss';

interface Props {
    label: string;
    id: string;
    name: string;
    onChange: (str: any) => void;
}

const RadioT: React.FC<Props> = props => {
    const onChange = (event: any) => {
        props.onChange(event.target.value);
    };
    return (
        <div className="RadioT">
            <input type="radio" id={props.id} name={"anton"} value={props.label} onChange={onChange}/>
            <LabelT for={props.id}>
                {props.label}
            </LabelT>
        </div>
    );
};

export default RadioT;
