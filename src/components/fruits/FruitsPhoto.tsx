import React from 'react';
import {FruitItem} from './interfaces/FruitItem';

interface Props {
    url: string;
    width: string;
    height: string;
}

const FruitsPhoto: React.FC<Props> = props => {
    return (
        <div>
            <img src={props.url} width={props.width} height={props.height}/>
        </div>
    );
};

export default FruitsPhoto;
