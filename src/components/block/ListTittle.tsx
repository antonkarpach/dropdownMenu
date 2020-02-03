import React from 'react';
import './style.scss';
import Title from "./Title";

interface Props {
title: string;
}

const ListTitle: React.FC<Props> = props => {
    return(
        <div className="listTitle">
            <Title title={props.title}/>
        </div>
    );
};

export default ListTitle;
