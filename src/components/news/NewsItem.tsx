import React from 'react';
import './NewsItem.scss';
import {NewsItem as NewsItemInterface} from "./interfaces/NewsItem";


interface Props {
    item: NewsItemInterface;
}
const NewsItem: React.FC<Props> = props => {

    return(
        <div className="NewsItem">
            <div className="NewsItem__name">{props.item.name}</div>
            <div className="NewsItem__description">{props.item.description}</div>
            <div className="NewsItem__tag">{props.item.tag}</div>
        </div>
    );
};

export default NewsItem;
