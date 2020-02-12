import React from 'react';

interface Props {
    for: string;
}

const LabelT: React.FC<Props> = props => {
    return(
    <label htmlFor={props.for}>{props.children}</label>
    );
};

export default LabelT;
