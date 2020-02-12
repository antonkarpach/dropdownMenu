import React from 'react';
import FruitsInfo from "./FruitsInfo";
import FruitsPhoto from "./FruitsPhoto";
import './FruitsList.scss';
import {FruitItem} from './interfaces/FruitItem';

const Fruit: React.FC<FruitItem> = props => {
    return (
        <div className="FruitsList">
            <FruitsPhoto url={props.image} width="200" height="200"/>
            <FruitsInfo name={props.name} description={props.description}/>
        </div>
    );
};

export default Fruit;
