import React, {MouseEvent} from 'react';
import Button from "./button/Button";
import './FruitsFilter.scss';
import {FruitTypes} from "./FruitTypes";

interface Props {
    onFilterChange: (fruitType: FruitTypes) => void;
}

const FruitsFilter: React.FC<Props> = props => {
    const onChange = (event) => {
        props.onFilterChange(event.target.value);
    };
    return (
        <div className="FruitsFilter">
            <Button value={FruitTypes.Banana} onClick={onChange}>{FruitTypes.Banana}</Button>
            <Button value={FruitTypes.Apple} onClick={onChange}>{FruitTypes.Apple}</Button>
            <Button value={FruitTypes.Orange} onClick={onChange}>{FruitTypes.Orange}</Button>
        </div>
    );
};

export default FruitsFilter;
