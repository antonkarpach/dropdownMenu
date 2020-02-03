import React from 'react';

interface Props {
    title: string;
}
const C: React.FC<Props> = props => {
    return(
        <div title = {props.title}>
        Component C
        </div>
    );
};

export default C;
