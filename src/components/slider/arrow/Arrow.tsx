import React from 'react';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';
import './Arrow.scss';
import {Direction} from "./Direction";

interface Props {
    direction: Direction;
    onClick: () => void;
}

const Arrow: React.FC<Props> = props => {

    const onClick = () => {
        props.onClick();
    };
    return(<div className="Arrow" onClick={onClick}>
        {props.direction === Direction.Right ? <img src={arrowRight}/> : <img src={arrowLeft}/>}
    </div>);
};

export default Arrow;
