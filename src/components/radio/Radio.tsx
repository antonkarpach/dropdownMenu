import React, {useMemo} from "react";
import './radio.scss';
import Label from "../Label";
import SortService from "../news/services/sort.service";

interface Props {
    title: string;
    id: string;
    name?: string;
    onRadioClick?: (value: any) => void;
}

const Radio: React.FC<Props> = props => {
    const onGetTitle = () => {
       alert(props.title);
    };

    return(
        <div className="Checkbox" onClick={onGetTitle}>
            <input type="radio" id={props.id}  onChange={props.onRadioClick} name={props.name}/>
            <Label title={props.title} htmlFor={props.id}/>
        </div>
    );
};

Radio.defaultProps = {
};

export default Radio;
