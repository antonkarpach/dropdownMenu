import React from 'react';
import './FruitsInfo.scss';

interface Props {
    name: string;
    description: string;
}


const FruitsInfo: React.FC<Props> = props => {
    return (
        <div className="FruitsInfo">
            <div className="FruitsInfo__name">{props.name}</div>
            <div className="FruitsInfo__description">{props.description}</div>
        </div>
    );
};

export default FruitsInfo;
