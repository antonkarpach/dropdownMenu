import React from 'react';
import './NewsList.scss';
import NewsItem from "./NewsItem";
import {NewsItem as NewsItemInterface} from "./interfaces/NewsItem";
import data from './news.json';

interface Props {
    list: NewsItemInterface[];
}
const NewsList: React.FC<Props> = props => {


    return (
        <div className="NewsList">
            {props.list.map((item: NewsItemInterface, index:number) => {
                return <NewsItem key={index} item={item}/>
            })}
        </div>
    );
};

export default NewsList;
