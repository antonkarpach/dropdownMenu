import React from "react";
import './Description.scss';

interface Props {
    title: React.ReactNode;
    description: React.ReactNode;
    icon: string;
}

const Description: React.FC<Props> = props => {
    return (
        <div className="Description">
            <div className="Description__icon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="Description__title">{props.title}</div>
            <div className="Description__description">{props.description}</div>
        </div>
    );
};

export default Description;
