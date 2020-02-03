import React from 'react';
import './style.scss';

interface Props {
    title: string;
}

const Title: React.FC<Props> = props => {
    return(
        <div className="Title">
            {props.title}
        </div>
    );
};

export default Title;
