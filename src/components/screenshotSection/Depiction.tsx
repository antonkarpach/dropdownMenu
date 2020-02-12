import React from 'react';
import './Depiction.scss';

interface Props {
    src: string;
    alt: string
}

const Depiction: React.FC<Props> = props => {
    return (
        <div className="Depiction">
            <img src={props.src} alt={props.alt}/>
        </div>
    );
};

export default Depiction;
