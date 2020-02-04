import React, {useState} from 'react';
import './News.scss';
import NewsFilter from "./NewsFilter";
import data from "./news.json";
import NewsList from "./NewsList";
import SortService from './services/sort.service';
import {ChangeTagFields} from "./ChangeTagFields";


const News: React.FC = () => {
    const [newsList, setNewsList] = useState(data);


    const onFilterChange = (tag: ChangeTagFields) => {
        setNewsList(SortService.filterByTag(data, tag));
    };

    return (
        <div className="News">
            <NewsFilter onFilterChange={onFilterChange}/>
            <NewsList list={newsList}/>
        </div>
    );
};

export default News;

