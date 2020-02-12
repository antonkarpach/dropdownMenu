import React, {useState} from 'react';
import FruitsFilter from "./FruitsFilter";
import './Fruits.scss';
import Fruit from './FruitsList';
import {fruits} from "./fruits";
import SortService from "./sort.service";
import {FruitTypes} from "./FruitTypes";


const Fruits: React.FC = () => {
    const [fruitItem, setFruitItem] = useState(fruits[0]);

    const onFilterChange = (fruitType: FruitTypes) => {
        setFruitItem(SortService.filterByName(fruits, fruitType));
    };

    return (
        <div className="Fruits">
            <Fruit name={fruitItem.name} description={fruitItem.description} image={fruitItem.image}/>
            <FruitsFilter onFilterChange={onFilterChange}/>
        </div>
    );
};

export default Fruits;
